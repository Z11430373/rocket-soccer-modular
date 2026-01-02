import { Scene } from './Scene.js';
import { World } from './World.js';

export class Game {
    constructor() {
        this.isGameRunning = false;
        this.scene = new Scene();
        this.world = new World(this.scene.getScene());
    }

    async start() {
        this.isGameRunning = true;
        this.scene.start();
        this.animate();
    }

    applySetting(setting, value) {
        console.log('Setting:', setting, value);
    }

    animate() {
        if (!this.isGameRunning) return;
        requestAnimationFrame(this.animate.bind(this));
        const dt = this.scene.getDelta();
        this.world.step(dt);
        this.scene.render();
    }
}
