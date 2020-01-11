const assert = require('assert')
const nodencoding = require('../source')

const data = [
  'https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests?asd=def&murat=gözel#hesss'
]
const expected = [
  'https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FRange_requests%3Fasd%3Ddef%26murat%3Dg%C3%B6zel%23hesss'
]

assert.strictEqual(nodencoding.encode('url', data[0]), expected[0])
assert.strictEqual(nodencoding.decode('url', expected[0]), data[0])
