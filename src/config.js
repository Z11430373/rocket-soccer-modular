export const CONFIG = {
    worldGravity: -30,
    carMass: 200,
    ballMass: 30,
    enginePower: 2000,
    jumpImpulse: 3900,
    camHeight: 10.5,
    camDist: 10,
    fovSens: 1.3,
    boostMulti: 2.5,
    baseSpeedLimit: 28,
    boostConsumption: 40,
    boostRegen: 3
};

export const SETTINGS = {
    ground: 'tech',
    hud: 'tech',
    vfx: 'on',
    ball: 'standard',
    control: 'keyboard'
};

export const VERSION_DATA = [
    { ver: "v18.015 Beta", desc: "AI 智能大升級：\n實作 driveTo 高階導航\n新增物理預判與自動跳躍\n優化攻防切換邏輯" },
    { ver: "v18.014.2 Beta", desc: "登入按鈕 Fail-Safe 機制" },
    { ver: "v18.014.1 Beta", desc: "緊急修復物理運算" }
];

export const GOOGLE_CONFIG = {
    CLIENT_ID: '801723208112-qnqkqssaavf3k7gv4r2ai1cgbt11pd4n.apps.googleusercontent.com',
    SCOPES: 'https://www.googleapis.com/auth/drive.appdata'
};
