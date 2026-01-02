import { CONFIG } from '../config.js';

export class World {
    constructor(threeScene) {
        this.world = new CANNON.World();
        this.world.gravity.set(0, CONFIG.worldGravity, 0);
        this.world.defaultContactMaterial.friction = 0.4;
        this.threeScene = threeScene;
        this._createGround();
    }

    _createGround() {
        const groundShape = new CANNON.Box(new CANNON.Vec3(50, 1, 100));
        const groundBody = new CANNON.Body({ mass: 0, shape: groundShape });
        groundBody.position.y = -1;
        this.world.addBody(groundBody);

        const groundGeo = new THREE.BoxGeometry(100, 2, 200);
        const groundMat = new THREE.MeshStandardMaterial({ color: 0x1a5f1a });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.position.y = -1;
        ground.receiveShadow = true;
        this.threeScene.add(ground);
    }

    getWorld() { return this.world; }
    step(dt) { this.world.step(1/60, dt, 3); }
    updateGroundTexture(style) { console.log('Ground:', style); }
}
