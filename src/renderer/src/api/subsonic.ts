import request from '../utils/request'
import { Conf } from 'electron-conf/renderer'
import { MD5 } from 'crypto-js'
// 配置
const conf: any = new Conf()

export const subsonicApi = {
    /**
     * 检查连接
     */
    ping: () => request('/rest/ping'),
    // /**
    //  * 获取音乐文件夹
    //  */
    // getMusicFolders: () => request('/rest/getMusicFolders'),
    // /**
    //  * 获取艺术家的索引列表
    //  */
    // getArtistsIndexesList: (musicFolderId?: string, ifModifiedSince?: string) =>
    //     request({
    //         url: '/rest/getIndexes',
    //         params: {
    //             musicFolderId,
    //             ifModifiedSince
    //         }
    //     }),
    // /**
    //  * 根据艺术家id获取音乐目录
    //  */
    // getMusicDirectoryByArtistId: (id: string) =>
    //     request({
    //         url: '/rest/getMusicDirectory',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 获取流派
    //  */
    // getGenres: () => request.get('/rest/getGenres'),
    // /**
    //  * 获取艺术家索引列表（根据 ID3 标签组织）
    //  */
    // getArtistsIndexesListOrganizedByID3: (musicFolderId?: string) =>
    //     request({
    //         url: '/rest/getArtists',
    //         params: {
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 根据艺术家id获取艺术家信息和专辑列表（根据 ID3 标签组织）
    //  */
    // getArtistInfoAndAlbumListByArtistIdOrganizedByID3: (id: string) =>
    //     request({
    //         url: '/rest/getArtist',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 根据专辑id获取专辑信息和歌曲列表（根据 ID3 标签组织）
    //  */
    // getAlbumInfoAndSongListByAlbumIdOrganizedByID3: (id: string) =>
    //     request({
    //         url: '/rest/getAlbum',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 根据歌曲id获取歌曲信息
    //  * @param {Object} params 参数
    //  * @param {string} params.id 歌曲id
    //  */
    // getSongInfoBySongId: (params) =>
    //     request({
    //         url: '/rest/getSong',
    //         params
    //     }),
    // /**
    //  * 根据id获取艺术家传记、图像和相似艺术家
    //  */
    // getArtistBiographyAndImageAndSimilarArtistsById: (
    //     id: string,
    //     count?: number,
    //     includeNotPresent?: boolean
    // ) =>
    //     request({
    //         url: '/rest/getArtistInfo',
    //         params: {
    //             id,
    //             count,
    //             includeNotPresent
    //         }
    //     }),
    // /**
    //  * 根据艺术家id获取艺术家传记、图像和相似艺术家（根据 ID3 标签组织）
    //  */
    // getArtistBiographyAndImageAndSimilarArtistsByArtistIdOrganizedByID3: (
    //     id: string,
    //     count?: number,
    //     includeNotPresent?: boolean
    // ) =>
    //     request({
    //         url: '/rest/getArtistInfo2',
    //         params: {
    //             id,
    //             count,
    //             includeNotPresent
    //         }
    //     }),
    // /**
    //  * 根据id获取专辑注释和图像
    //  */
    // getAlbumNotesAndImageById: (id: string) =>
    //     request({
    //         url: '/rest/getAlbumInfo',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 根据专辑id获取专辑注释和图像（根据 ID3 标签组织）
    //  */
    // getAlbumNotesAndImageByAlbumIdOrganizedByID3: (id: string) =>
    //     request({
    //         url: '/rest/getAlbumInfo2',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 根据id获取相似歌曲
    //  */
    // getSimilarSongsById: (id: string, count?: number) =>
    //     request({
    //         url: '/rest/getSimilarSongs',
    //         params: {
    //             id,
    //             count
    //         }
    //     }),
    // /**
    //  * 根据艺术家id获取相似歌曲（根据 ID3 标签组织）
    //  */
    // getSimilarSongsByArtistIdOrganizedByID3: (id: string, count?: number) =>
    //     request({
    //         url: '/rest/getSimilarSongs2',
    //         params: {
    //             id,
    //             count
    //         }
    //     }),
    // /**
    //  * 根据艺术家名称获取热门歌曲
    //  */
    // getTopSongsByArtistName: (artist: string, count?: number) =>
    //     request({
    //         url: '/rest/getTopSongs',
    //         params: {
    //             artist,
    //             count
    //         }
    //     }),
    // /**
    //  * 获取专辑列表
    //  */
    // getAlbumList: (
    //     type: string,
    //     size?: number,
    //     offset?: number,
    //     fromYear?: number,
    //     toYear?: number,
    //     genre?: string,
    //     musicFolderId?: string
    // ) =>
    //     request({
    //         url: '/rest/getAlbumList',
    //         params: {
    //             type,
    //             size,
    //             offset,
    //             fromYear,
    //             toYear,
    //             genre,
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 获取专辑列表(根据 ID3 标签组织)
    //  */
    // getAlbumListOrganizedByID3: (
    //     type: string,
    //     size?: number,
    //     offset?: number,
    //     fromYear?: number,
    //     toYear?: number,
    //     genre?: string,
    //     musicFolderId?: string
    // ) =>
    //     request({
    //         url: '/rest/getAlbumList2',
    //         params: {
    //             type,
    //             size,
    //             offset,
    //             fromYear,
    //             toYear,
    //             genre,
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 获取随机歌曲
    //  */
    // getRandomSongs: (
    //     size?: number,
    //     genre?: string,
    //     fromYear?: number,
    //     toYear?: number,
    //     musicFolderId?: string
    // ) =>
    //     request({
    //         url: '/rest/getRandomSongs',
    //         params: {
    //             size,
    //             genre,
    //             fromYear,
    //             toYear,
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 根据流派获取歌曲
    //  */
    // getSongsByGenre: (
    //     genre: string,
    //     count?: number,
    //     offset?: number,
    //     musicFolderId?: string
    // ) =>
    //     request({
    //         url: '/rest/getSongsByGenre',
    //         params: {
    //             genre,
    //             count,
    //             offset,
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 获取所有用户当前正在播放的内容
    //  */
    // getNowPlaying: () => request('/rest/getNowPlaying'),
    // /**
    //  * 获取收藏的歌曲、专辑和艺术家
    //  */
    // getStarred: (musicFolderId?: string) =>
    //     request({
    //         url: '/rest/getStarred',
    //         params: {
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 获取收藏的歌曲、专辑和艺术家（根据 ID3 标签组织）
    //  */
    // getStarredOrganizedByID3: (musicFolderId?: string) =>
    //     request({
    //         url: '/rest/getStarred2',
    //         params: {
    //             musicFolderId
    //         }
    //     }),
    // /**
    //  * 搜索专辑、歌曲、艺术家
    //  * @param {Object} params 搜索参数
    //  * @param {string} params.query 搜索关键词
    //  * @param {number} [params.artistCount=20] 可选的，返回的艺术家数量，默认20
    //  * @param {number} [params.artistOffset=0] 可选的，艺术家列表偏移量，用于分页，默认0
    //  * @param {number} [params.albumCount=20] 可选的，返回的专辑数量，默认20
    //  * @param {number} [params.albumOffset=0] 可选的，专辑列表偏移量，用于分页，默认0
    //  * @param {number} [params.songCount=20] 可选的，返回的歌曲数量，默认20
    //  * @param {number} [params.songOffset=0] 可选的，歌曲列表偏移量，用于分页，默认0
    //  * @param {string} [params.musicFolderId] 可选的，音乐文件夹ID
    //  */
    // search: (params) =>
    //     request({
    //         url: '/rest/search2',
    //         params
    //     }),
    /**
     * 搜索专辑、歌曲、艺术家（根据 ID3 标签组织）
     * @param {Object} params 参数
     * @param {string} params.query 搜索关键词
     * @param {number} [params.artistCount=20] 可选的，返回的艺术家数量，默认20
     * @param {number} [params.artistOffset=0] 可选的，艺术家列表偏移量，用于分页，默认0
     * @param {number} [params.albumCount=20] 可选的，返回的专辑数量，默认20
     * @param {number} [params.albumOffset=0] 可选的，专辑列表偏移量，用于分页，默认0
     * @param {number} [params.songCount=20] 可选的，返回的歌曲数量，默认20
     * @param {number} [params.songOffset=0] 可选的，歌曲列表偏移量，用于分页，默认0
     * @param {string} [params.musicFolderId] 可选的，音乐文件夹ID
     */
    searchOrganizedByID3: (params) =>
        request({
            url: '/rest/search3',
            params
        }),
    // /**
    //  * 根据用户名获取歌单
    //  */
    // getPlaylistsByUsername: (username?: string) =>
    //     request({
    //         url: '/rest/getPlaylists',
    //         params: {
    //             username
    //         }
    //     }),
    // /**
    //  * 通过歌单id获取歌单中的歌曲
    //  */
    // getSongsByPlaylistId: (id: string) =>
    //     request({
    //         url: '/rest/getPlaylist',
    //         params: {
    //             id
    //         }
    //     }),
    // /**
    //  * 创建歌单
    //  */
    // createPlaylist: (name: string, playlistId?: string, songId?: string) =>
    //     request({
    //         url: '/rest/createPlaylist',
    //         params: {
    //             name,
    //             playlistId,
    //             songId
    //         }
    //     }),
    // /**
    //  * 更新歌单
    //  */
    // updatePlaylist: (
    //     playlistId: string,
    //     name?: string,
    //     comment?: string,
    //     isPublic?: boolean,
    //     songIdToAdd?: string,
    //     songIndexToRemove?: string
    // ) =>
    //     request({
    //         url: '/rest/updatePlaylist',
    //         params: {
    //             playlistId,
    //             name,
    //             comment,
    //             public: isPublic,
    //             songIdToAdd,
    //             songIndexToRemove
    //         }
    //     }),
    // /**
    //  * 删除歌单
    //  */
    // deletePlaylist: (id: string) =>
    //     request({
    //         url: '/rest/deletePlaylist',
    //         params: {
    //             id
    //         }
    //     }),
    /**
     * 歌曲播放链接
     * @param {Object} params 参数
     * @param {string} params.id 歌曲 id
     * @param {string} [params.maxBitRate] 可选的，最大比特率
     * @param {string} [params.format] 可选的，格式
     * @param {string} [params.timeOffset] 可选的，时间偏移
     * @param {string} [params.size] 可选的，大小
     * @param {string} [params.estimateContentLength] 可选的，估计内容长度
     * @param {string} [params.converted] 可选的，转换
     */
    getStreamUrl: async (params) =>
        request.getUri({
            baseURL: await conf.get(
                'userConfig.mediaLibraryConfig.serverAddress',
                'http://localhost:3000'
            ),
            url: '/rest/stream',
            params: {
                u: await conf.get('userConfig.mediaLibraryConfig.username'),
                t: MD5(
                    `${await conf.get('userConfig.mediaLibraryConfig.password')}happier`
                ).toString(),
                s: 'happier',
                v: '1.16.1',
                c: 'web',
                f: 'json',
                ...params
            }
        }),
    // /**
    //  * 下载歌曲
    //  */
    // downloadSong: (id: string) =>
    //     request({
    //         url: '/rest/download',
    //         params: {
    //             id
    //         }
    //     }),
    /**
     * 根据 id 获取封面
     * @param {Object} params 参数
     * @param {string} params.id 歌曲、专辑、艺术家 id
     * @param {string} [params.size] 可选的，封面大小
     */
    getCoverById: async (params) =>
        request.getUri({
            baseURL: await conf.get(
                'userConfig.mediaLibraryConfig.serverAddress',
                'http://localhost:3000'
            ),
            url: '/rest/getCoverArt',
            params: {
                u: await conf.get('userConfig.mediaLibraryConfig.username'),
                t: MD5(
                    `${await conf.get('userConfig.mediaLibraryConfig.password')}happier`
                ).toString(),
                s: 'happier',
                v: '1.16.1',
                c: 'web',
                f: 'json',
                ...params
            }
        })
    // /**
    //  * 获取歌词
    //  */
    // getLyrics: (artist?: string, title?: string) =>
    //     request({
    //         url: '/rest/getLyrics',
    //         params: {
    //             artist,
    //             title
    //         }
    //     }),
    // /**
    //  * 收藏歌曲、专辑、艺术家
    //  */
    // star: (id?: string, albumId?: string, artistId?: string) =>
    //     request({
    //         url: '/rest/star',
    //         params: {
    //             id,
    //             albumId,
    //             artistId
    //         }
    //     }),
    // /**
    //  * 取消收藏歌曲、专辑、艺术家
    //  */
    // unStar: (id?: string, albumId?: string, artistId?: string) =>
    //     request({
    //         url: '/rest/unstar',
    //         params: {
    //             id,
    //             albumId,
    //             artistId
    //         }
    //     }),
    // /**
    //  * 为歌曲、专辑、艺术家评分
    //  */
    // setRating: (id: string, rating: number) =>
    //     request({
    //         url: '/rest/setRating',
    //         params: {
    //             id,
    //             rating
    //         }
    //     }),
    // /**
    //  * 获取扫描状态
    //  */
    // getScanStatus: () => request('/rest/getScanStatus'),
    // /**
    //  * 扫描
    //  */
    // startScan: () => request('/rest/startScan')
}
