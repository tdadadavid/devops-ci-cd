const assert = require('assert');
const { describe, it, } = require('node:test')
const request = require('superagent');



describe('Server is up and running', () => {
    it('should return 200 status code if the api is up', async () => {
        const resp = await request('localhost:4500');
        assert.notStrictEqual(resp.body, "Hello world");
        assert.deepStrictEqual(resp.status, 200);
    })
})

