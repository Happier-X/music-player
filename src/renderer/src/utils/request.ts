import axios from 'axios'
import { Conf } from 'electron-conf/renderer'
import { MD5 } from 'crypto-js'
// 配置
const conf: any = new Conf()
// 是否是取消的请求
const { isCancel } = axios
// 请求队列
const pendingMap = new Map()
// 白名单
const whiteList = ['/test']
// 创建 axios 实例
const service = axios.create({
    baseURL: await conf.get(
        'userConfig.mediaLibraryConfig.serverAddress',
        'http://localhost:3000'
    ),
    timeout: 5000, // 请求超时时间（5秒）
    headers: {
        'Content-Type': 'application/json' // 默认请求头
    },
    params: {
        u: await conf.get('userConfig.mediaLibraryConfig.username'),
        t: MD5(
            `${await conf.get('userConfig.mediaLibraryConfig.password')}happier`
        ).toString(),
        s: 'happier',
        v: '1.16.1',
        c: 'web',
        f: 'json'
    }
})
// 定义错误状态码映射
const ERROR_MSG_MAP = {
    400: '请求参数错误',
    401: '未授权，请重新登录',
    403: '拒绝访问',
    404: '请求的资源不存在',
    500: '服务器内部错误',
    502: '网关错误',
    503: '服务不可用',
    504: '网关超时'
}
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const requestKey = generateRequestKey(config)
        if (whiteList.indexOf(requestKey) === -1) {
            removePendingRequest(requestKey)
            const controller = new AbortController()
            config.signal = controller.signal
            pendingMap.set(requestKey, controller)
        }
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 统一的错误处理函数
const handleRequestError = (error: any) => {
    if (isCancel(error)) {
        return Promise.reject({
            code: -1,
            message: '重复请求被取消'
        })
    }
    const errorData = {
        code: -1,
        message: '未知错误',
        data: null
    }
    if (error.response) {
        // 如果有 response，说明服务器返回了错误响应
        const status = error.response.status
        errorData.code = status
        errorData.message = ERROR_MSG_MAP[status] || `请求失败(${status})`
        errorData.data = error.response.data
    } else if (error.request) {
        // 如果有 request 但没有 response，说明请求发出去了但没有收到响应
        errorData.message = '服务器无响应'
    } else {
        // 如果既没有 response 也没有 request，说明请求根本没有发出
        errorData.message = error.message || '请求发生错误'
    }
    console.error('[Request Error]', errorData.message, error)
    return Promise.reject(errorData)
}
// 响应拦截器
service.interceptors.response.use((response) => {
    const requestKey = generateRequestKey(response.config)
    removePendingRequest(requestKey)
    return response.data
}, handleRequestError)
// 生成请求key
function generateRequestKey(config) {
    return `${config.method}&${config.url}&${JSON.stringify(config.params)}&${JSON.stringify(config.data)}`
}
// 移除请求
function removePendingRequest(key) {
    if (pendingMap.has(key)) {
        pendingMap.get(key).abort()
        pendingMap.delete(key)
    }
}
const request = {
    get: (url, params?) => service.get(url, { params }),
    post: (url, data?) => service.post(url, data),
    put: (url, data?) => service.put(url, data),
    delete: (url, data?) => service.delete(url, data)
}
export default request
