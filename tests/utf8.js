const assert = require('assert')
const nodencoding = require('../source')

const data = [
  'murat gözel'
]
const expected = [
  'murat gözel'
]

assert.strictEqual(nodencoding.encode('utf8', data[0]), expected[0])
assert.strictEqual(nodencoding.decode('utf8', expected[0]).toString('utf8'), data[0])
