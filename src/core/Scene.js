import { CONFIG } from '../config.js';

export class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x2c3e50);
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 500);
        this.camera.position.set(0, CONFIG.camHeight, CONFIG.camDist);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        document.getElementById('game-container').appendChild(this.renderer.domElement);
        this.clock = null;
        this._initLights();
    }
    
    _initLights() {
        const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
        dirLight.position.set(-60, 100, 40);
        this.scene.add(dirLight);
    }

    start() { this.clock = new THREE.Clock(); }
    getDelta() { return this.clock ? Math.min(this.clock.getDelta(), 0.1) : 1/60; }
    getScene() { return this.scene; }
    getCamera() { return this.camera; }

    updateCamera(pos, quat, speed) {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(quat);
        forward.y = 0;
        if (forward.lengthSq() > 0.01) forward.normalize();
        
        const targetPos = new THREE.Vector3().copy(pos).sub(forward.clone().multiplyScalar(CONFIG.camDist)).add(new THREE.Vector3(0, CONFIG.camHeight, 0));
        this.camera.position.lerp(targetPos, 0.1);
        const lookTarget = new THREE.Vector3().copy(pos).add(forward.clone().multiplyScalar(20));
        this.camera.lookAt(lookTarget);
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render() { this.renderer.render(this.scene, this.camera); }
}
