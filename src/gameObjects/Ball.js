export class Ball {
    constructor(scene, world) {
        const ballShape = new CANNON.Sphere(1);
        this.body = new CANNON.Body({ mass: 30, shape: ballShape });
        this.body.position.y = 5;
        world.addBody(this.body);
    }

    update() {}
    reset() { this.body.position.y = 5; }
    checkReset() {}
    updateTexture(style) {}
}
