// app.test.js
const request = require('supertest');
const { app  } = require('./index');

describe('Objects API', () => {
    it('should create a new object', async () => {
        const object = { id: 1, name: 'Cube' };
        const response = await request(app)
            .post('/objects')
            .send(object)
            .expect(201);

        expect(response.body).toEqual(object);
    });

    it('should retrieve all objects', async () => {
        const response = await request(app)
            .get('/objects')
            .expect(200);

        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toEqual({ id: 1, name: 'Cube' });
    });

    it('should delete an object', async () => {
        await request(app)
            .delete('/objects/1')
            .expect(204);

        const response = await request(app)
            .get('/objects')
            .expect(200);

        expect(response.body).toHaveLength(0);
    });
});