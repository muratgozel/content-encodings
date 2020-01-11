const assert = require('assert')
const nodencoding = require('../source')

const data = [
  'murat gözel'
]
const expected = [
  '6d757261742067c3b67a656c'
]

assert.strictEqual(nodencoding.encode('hex', data[0]), expected[0])
assert.strictEqual(nodencoding.decode('hex', expected[0]).toString('utf8'), data[0])
