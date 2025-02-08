import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        electron: ElectronAPI
        api: {
            /**
             * 关闭窗口
             */
            closeWindow: () => void
            /**
             * 最小化窗口
             */
            minimizeWindow: () => void
            /**
             * 全屏
             */
            handleFullScreen: () => void
            /**
             * 退出全屏
             */
            exitFullScreen: () => void
            /**
             * 判断是否全屏
             */
            isFullScreen: () => Promise<boolean>
        }
    }
}
