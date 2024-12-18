// scene.integration.test.js
const Scene = require('./Scene');

test('should add and remove an object from the scene', () => {
    const scene = new Scene();
    const object = { id: 1, name: 'Cube' };

    // Adiciona o objeto à cena
    scene.addObjectToScene(object);
    let objects = scene.getObjects();
    expect(objects).toHaveLength(1);
    expect(objects[0]).toEqual(object);

    // Remove o objeto da cena
    scene.removeObjectFromScene(object);
    objects = scene.getObjects();
    expect(objects).toHaveLength(0);
});