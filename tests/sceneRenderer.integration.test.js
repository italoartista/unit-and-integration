// sceneRenderer.integration.test.js
const Scene = require('./Scene');
const Renderer = require('./Renderer');

test('should render objects added to the scene', () => {
    const scene = new Scene();
    const renderer = new Renderer(scene);
    const object1 = { id: 1, name: 'Cube' };
    const object2 = { id: 2, name: 'Sphere' };

    // Adiciona objetos à cena
    scene.addObjectToScene(object1);
    scene.addObjectToScene(object2);

    // Renderiza a cena
    const renderOutput = renderer.render();
    expect(renderOutput).toHaveLength(2);
    expect(renderOutput).toContain('Rendering object: Cube');
    expect(renderOutput).toContain('Rendering object: Sphere');
});

test('should update rendering after removing an object from the scene', () => {
    const scene = new Scene();
    const renderer = new Renderer(scene);
    const object1 = { id: 1, name: 'Cube' };
    const object2 = { id: 2, name: 'Sphere' };

    // Adiciona objetos à cena
    scene.addObjectToScene(object1);
    scene.addObjectToScene(object2);

    // Remove um objeto da cena
    scene.removeObjectFromScene(object1);

    // Renderiza a cena
    const renderOutput = renderer.render();
    expect(renderOutput).toHaveLength(1);
    expect(renderOutput).toContain('Rendering object: Sphere');
    expect(renderOutput).not.toContain('Rendering object: Cube');
});