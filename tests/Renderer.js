// renderer.js
class Renderer {
    constructor(scene) {
        this.scene = scene;
    }

    render() {
        const objects = this.scene.getObjects();
        return objects.map(obj => `Rendering object: ${obj.name}`);
    }
}

module.exports = Renderer;