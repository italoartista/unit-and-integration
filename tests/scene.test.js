// scene.test.js
const Scene = require('./Scene');

test('should add an object to the scene', () => {
    const scene = new Scene();
    const object = { id: 1, name: 'Cube' };

    scene.addObjectToScene(object);

    const objects = scene.getObjects();
    try {
        expect(objects).toHaveLength(1);
        console.log("O objeto foi adicionado com as seguintes propriedades " +  "id: "+ object.id + " nome: " + object.name);  
    } catch (error) {
        throw new Error('Expected the scene to have exactly one object');
    }
    try {
        expect(objects[0]).toEqual(object);
    } catch (error) {
        throw new Error('Expected the object in the scene to match the added object');
    }
});

test('should add multiple objects to the scene', () => {
    const scene = new Scene();
    const object1 = { id: 1, name: 'Cube' };
    const object2 = { id: 2, name: 'Sphere' };

    scene.addObjectToScene(object1);
    scene.addObjectToScene(object2);

    const objects = scene.getObjects();
    try {
        expect(objects).toHaveLength(2);
    } catch (error) {
        throw new Error('Expected the scene to have exactly two objects');
    }
    try {
        expect(objects).toContainEqual(object1);
    } catch (error) {
        throw new Error('Expected the scene to contain the first object');
    }
    try {
        expect(objects).toContainEqual(object2);
    } catch (error) {
        throw new Error('Expected the scene to contain the second object');
    }
});

test('should remove an object from the scene', () => {
    const scene = new Scene();
    const object = { id: 1, name: 'Cube' };

    scene.addObjectToScene(object);
    scene.removeObjectFromScene(object);

    const objects = scene.getObjects();
    try {
        expect(objects).toHaveLength(0);
    } catch (error) {
        throw new Error('Expected the scene to have no objects after removal');
    }
});