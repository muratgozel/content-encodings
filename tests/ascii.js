const assert = require('assert')
const nodencoding = require('../source')

const data = [
  'murat gözel'
]
const expected = [
  '109 117 114 97 116 32 103 195 182 122 101 108'
]

//assert.strictEqual(nodencoding.encode('ascii', data[0]), expected[0])
//assert.strictEqual(nodencoding.decode('ascii', expected[0]).toString('ascii'), data[0])
