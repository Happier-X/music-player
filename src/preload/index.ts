import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
    // 关闭窗口
    closeWindow: () => {
        ipcRenderer.send('close-window')
    },
    // 最小化窗口
    minimizeWindow: () => {
        ipcRenderer.send('minimize-window')
    },
    // 全屏
    handleFullScreen: () => {
        ipcRenderer.send('handle-full-screen')
    },
    // 退出全屏
    exitFullScreen: () => {
        ipcRenderer.send('exit-full-screen')
    },
    // 判断是否全屏
    isFullScreen: () => {
        return ipcRenderer.invoke('is-full-screen')
    }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI)
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    // @ts-ignore (define in dts)
    window.electron = electronAPI
    // @ts-ignore (define in dts)
    window.api = api
}
