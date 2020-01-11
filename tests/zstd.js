const assert = require('assert')
const fs = require('fs')
const contentencodings = require('../source')

const data = [
  fs.readFileSync('./tests/data/simpleText.txt', 'utf8')
]
const expected = [
  data[0]
]

contentencodings.encode('zstd', data[0], null, function(err, compressed) {
  if (err) throw err
  contentencodings.decode('zstd', compressed, null, function(err, result) {
    if (err) throw err
    const size = Buffer.byteLength(Buffer.from(data[0]))
    const sizeCompressed = Buffer.byteLength(compressed)
    const rate = (100 - (sizeCompressed / size) * 100)
    console.log(`Zstandart compressed the sample from ${size} to ${sizeCompressed} (Rate is %${rate.toFixed(2)})`)
    assert.strictEqual(data[0], result.toString('utf8'))
  })
})
