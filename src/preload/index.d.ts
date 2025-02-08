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
        }
    }
}
