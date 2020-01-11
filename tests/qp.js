const assert = require('assert')
const nodencoding = require('../source')

const data = [
  'murat gözel'
]
const expected = [
  'murat g=C3=B6zel'
]

assert.strictEqual(nodencoding.encode('qp', data[0]), expected[0])
assert.strictEqual(nodencoding.decode('qp', expected[0]).toString('utf8'), data[0])
