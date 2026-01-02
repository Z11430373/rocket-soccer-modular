import { Game } from './core/Game.js';
import * as UIManager from './ui/UIManager.js';
import * as CloudSave from './services/CloudSave.js';

window.onload = () => {
    // 1. 初始化 UI 管理器
    UIManager.initVersionHistory();

    // 2. 初始化雲端存檔服務
    CloudSave.init(UIManager.updateLoginUI, UIManager.updateApiIndicator, UIManager.updateSaveStatus);

    // 3. 創建遊戲實例
    const game = new Game();

    // 4. 將 UI 事件與遊戲邏輯連結
    UIManager.initMainMenu({
        onStart: () => game.start(),
        onOpenSettings: () => UIManager.openModal('settings-modal'),
        onOpenVersions: () => UIManager.openModal('version-modal'),
        onGoogleLogin: CloudSave.handleAuthClick
    });

    UIManager.initSettingsModal({
        onConfirm: () => UIManager.closeModal('settings-modal'),
        onManualSave: () => CloudSave.saveGameToDrive(),
        onSettingChange: (setting, value) => {
            game.applySetting(setting, value);
        }
    });

    UIManager.initVersionModal({
        onClose: () => UIManager.closeModal('version-modal')
    });
    
    UIManager.initGameUI({
        onFullscreen: () => {
            if (!document.fullscreenElement) document.documentElement.requestFullscreen();
            else if (document.exitFullscreen) document.exitFullscreen();
        },
        onOpenSettings: () => UIManager.openModal('settings-modal')
    });

    // 5. 預設裝置偵測
    if (/Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 800) {
        document.querySelector('#opt-control [data-val="touch"]').click();
    }
};
