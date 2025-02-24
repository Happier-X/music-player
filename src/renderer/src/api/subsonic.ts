import request from '../utils/request'

export const subsonicApi = {
    /**
     * 检查连接
     */
    ping: () => request('/rest/ping'),
    /**
     * 获取音乐文件夹
     */
    getMusicFolders: () => request('/rest/getMusicFolders'),
    /**
     * 获取艺术家的索引列表
     */
    getArtistsIndexesList: (musicFolderId?: string, ifModifiedSince?: string) =>
        request.get('/rest/getIndexes', {
            params: {
                musicFolderId,
                ifModifiedSince
            }
        }),
    /**
     * 根据艺术家id获取音乐目录
     */
    getMusicDirectoryByArtistId: (id: string) =>
        request.get('/rest/getMusicDirectory', {
            params: {
                id
            }
        }),
    /**
     * 获取流派
     */
    getGenres: () => request.get('/rest/getGenres'),
    /**
     * 获取艺术家索引列表（根据 ID3 标签组织）
     */
    getArtistsIndexesListOrganizedByID3: (musicFolderId?: string) =>
        request.get('/rest/getArtists', {
            params: {
                musicFolderId
            }
        }),
    /**
     * 根据艺术家id获取艺术家信息和专辑列表（根据 ID3 标签组织）
     */
    getArtistInfoAndAlbumListByArtistIdOrganizedByID3: (id: string) =>
        request.get('/rest/getArtist', {
            params: {
                id
            }
        }),
    /**
     * 根据专辑id获取专辑信息和歌曲列表（根据 ID3 标签组织）
     */
    getAlbumInfoAndSongListByAlbumIdOrganizedByID3: (id: string) =>
        request.get('/rest/getAlbum', {
            params: {
                id
            }
        }),
    /**
     * 根据歌曲id获取歌曲信息
     */
    getSongInfoBySongId: (id: string) =>
        request.get('/rest/getSong', {
            params: {
                id
            }
        }),
    /**
     * 根据id获取艺术家传记、图像和相似艺术家
     */
    getArtistBiographyAndImageAndSimilarArtistsById: (
        id: string,
        count?: number,
        includeNotPresent?: boolean
    ) =>
        request.get('/rest/getArtistInfo', {
            params: {
                id,
                count,
                includeNotPresent
            }
        }),
    /**
     * 根据艺术家id获取艺术家传记、图像和相似艺术家（根据 ID3 标签组织）
     */
    getArtistBiographyAndImageAndSimilarArtistsByArtistIdOrganizedByID3: (
        id: string,
        count?: number,
        includeNotPresent?: boolean
    ) =>
        request.get('/rest/getArtistInfo2', {
            params: {
                id,
                count,
                includeNotPresent
            }
        }),
    /**
     * 根据id获取专辑注释和图像
     */
    getAlbumNotesAndImageById: (id: string) =>
        request.get('/rest/getAlbumInfo', {
            params: {
                id
            }
        }),
    /**
     * 根据专辑id获取专辑注释和图像（根据 ID3 标签组织）
     */
    getAlbumNotesAndImageByAlbumIdOrganizedByID3: (id: string) =>
        request.get('/rest/getAlbumInfo2', {
            params: {
                id
            }
        }),
    /**
     * 根据id获取相似歌曲
     */
    getSimilarSongsById: (id: string, count?: number) =>
        request.get('/rest/getSimilarSongs', {
            params: {
                id,
                count
            }
        }),
    /**
     * 根据艺术家id获取相似歌曲（根据 ID3 标签组织）
     */
    getSimilarSongsByArtistIdOrganizedByID3: (id: string, count?: number) =>
        request.get('/rest/getSimilarSongs2', {
            params: {
                id,
                count
            }
        }),
    /**
     * 根据艺术家名称获取热门歌曲
     */
    getTopSongsByArtistName: (artist: string, count?: number) =>
        request.get('/rest/getTopSongs', {
            params: {
                artist,
                count
            }
        }),
    /**
     * 获取专辑列表
     */
    getAlbumList: (
        type: string,
        size?: number,
        offset?: number,
        fromYear?: number,
        toYear?: number,
        genre?: string,
        musicFolderId?: string
    ) =>
        request.get('/rest/getAlbumList', {
            params: {
                type,
                size,
                offset,
                fromYear,
                toYear,
                genre,
                musicFolderId
            }
        }),
    /**
     * 获取专辑列表(根据 ID3 标签组织)
     */
    getAlbumListOrganizedByID3: (
        type: string,
        size?: number,
        offset?: number,
        fromYear?: number,
        toYear?: number,
        genre?: string,
        musicFolderId?: string
    ) =>
        request.get('/rest/getAlbumList2', {
            params: {
                type,
                size,
                offset,
                fromYear,
                toYear,
                genre,
                musicFolderId
            }
        }),
    /**
     * 获取随机歌曲
     */
    getRandomSongs: (
        size?: number,
        genre?: string,
        fromYear?: number,
        toYear?: number,
        musicFolderId?: string
    ) =>
        request.get('/rest/getRandomSongs', {
            params: {
                size,
                genre,
                fromYear,
                toYear,
                musicFolderId
            }
        }),
    /**
     * 根据流派获取歌曲
     */
    getSongsByGenre: (
        genre: string,
        count?: number,
        offset?: number,
        musicFolderId?: string
    ) =>
        request.get('/rest/getSongsByGenre', {
            params: {
                genre,
                count,
                offset,
                musicFolderId
            }
        }),
    /**
     * 获取所有用户当前正在播放的内容
     */
    getNowPlaying: () => request.get('/rest/getNowPlaying'),
    /**
     * 获取收藏的歌曲、专辑和艺术家
     */
    getStarred: (musicFolderId?: string) =>
        request.get('/rest/getStarred', {
            params: {
                musicFolderId
            }
        }),
    /**
     * 获取收藏的歌曲、专辑和艺术家（根据 ID3 标签组织）
     */
    getStarredOrganizedByID3: (musicFolderId?: string) =>
        request.get('/rest/getStarred2', {
            params: {
                musicFolderId
            }
        }),
    /**
     * 搜索专辑、歌曲、艺术家
     */
    search: (
        query: string,
        artistCount?: number,
        artistOffset?: number,
        albumCount?: number,
        albumOffset?: number,
        songCount?: number,
        songOffset?: number,
        musicFolderId?: string
    ) =>
        request.get('/rest/search2', {
            params: {
                query,
                artistCount,
                artistOffset,
                albumCount,
                albumOffset,
                songCount,
                songOffset,
                musicFolderId
            }
        }),
    /**
     * 搜索专辑、歌曲、艺术家（根据 ID3 标签组织）
     */
    searchOrganizedByID3: (
        query: string,
        artistCount?: number,
        artistOffset?: number,
        albumCount?: number,
        albumOffset?: number,
        songCount?: number,
        songOffset?: number,
        musicFolderId?: string
    ) =>
        request.get('/rest/search3', {
            params: {
                query,
                artistCount,
                artistOffset,
                albumCount,
                albumOffset,
                songCount,
                songOffset,
                musicFolderId
            }
        }),
    /**
     * 根据用户名获取歌单
     */
    getPlaylistsByUsername: (username?: string) =>
        request.get('/rest/getPlaylists', {
            params: {
                username
            }
        }),
    /**
     * 通过歌单id获取歌单中的歌曲
     */
    getSongsByPlaylistId: (id: string) =>
        request.get('/rest/getPlaylist', {
            params: {
                id
            }
        }),
    /**
     * 创建歌单
     */
    createPlaylist: (name: string, playlistId?: string, songId?: string) =>
        request.get('/rest/createPlaylist', {
            params: {
                name,
                playlistId,
                songId
            }
        }),
    /**
     * 更新歌单
     */
    updatePlaylist: (
        playlistId: string,
        name?: string,
        comment?: string,
        isPublic?: boolean,
        songIdToAdd?: string,
        songIndexToRemove?: string
    ) =>
        request.get('/rest/updatePlaylist', {
            params: {
                playlistId,
                name,
                comment,
                public: isPublic,
                songIdToAdd,
                songIndexToRemove
            }
        }),
    /**
     * 删除歌单
     */
    deletePlaylist: (id: string) =>
        request.get('/rest/deletePlaylist', {
            params: {
                id
            }
        }),
    /**
     * 播放歌曲
     */
    playSong: (id: string) => request.get('/rest/stream', { params: { id } })
}
