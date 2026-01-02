export class Car {
    constructor(scene, world, config) {
        this.scene = scene;
        this.world = world;
        this.isAI = config.isAI;
        this.body = new CANNON.Body({ mass: 200 });
        this.body.position = config.position;
        this.world.addBody(this.body);
    }

    applyControl(input, boost) { return false; }
    update() {}
    reset(pos, angle) { this.body.position = pos; }
    checkReset(pos, angle) {}
}
