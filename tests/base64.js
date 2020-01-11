const assert = require('assert')
const nodencoding = require('../source')

const expected = 'bWVyaGFiYQ=='
assert.strictEqual(nodencoding.encode('base64', 'merhaba'), expected)
assert.strictEqual(nodencoding.decode('base64', expected).toString('utf8'), 'merhaba')
