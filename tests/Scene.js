// scene.js
class Scene {
    constructor() {
        this.objects = [];
    }

    addObjectToScene(object) {
        this.objects.push(object);
    }

    getObjects() {
        return this.objects;
    }
    removeObjectFromScene(object) {
        this.objects = this.objects.filter(obj => obj !== object);
    }
}

module.exports = Scene;