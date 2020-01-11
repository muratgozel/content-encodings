const assert = require('assert')
const fs = require('fs')
const nodencoding = require('../source')

const data = [
  fs.readFileSync('./tests/data/simpleText.txt', 'utf8')
]
const expected = [
  data[0]
]

nodencoding.encode('gzip', data[0], null, function(err, gzipped) {
  if (err) throw err
  nodencoding.decode('gzip', gzipped, null, function(err, result) {
    if (err) throw err
    const size = Buffer.byteLength(Buffer.from(data[0]))
    const sizeCompressed = Buffer.byteLength(gzipped)
    const rate = (100 - (sizeCompressed / size) * 100)
    console.log(`GZIP compressed the sample from ${size} to ${sizeCompressed} (Rate is %${rate.toFixed(2)})`)
    assert.strictEqual(data[0], result.toString('utf8'))
  })
})
