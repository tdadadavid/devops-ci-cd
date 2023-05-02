const assert = require('assert');
const { describe, it, } = require('node:test')
const request = require('supertest');

const http = require('http');
const app = require('./app');


const server = http.createServer(app);



describe('Server is up and running', () => {
    it('should return 200 status code if the api is up', async () => {
        const resp = await request(server).get('/')
        assert.deepStrictEqual(resp.status, 200);
    })
})

