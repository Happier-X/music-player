import request from '../utils/request'

export const subsonicApi = {
    ping: () => request.get('/rest/ping')
}
