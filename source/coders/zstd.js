const os = require('os')
const fs = require('fs')
const path = require('path')
const {Readable, Writable, pipeline} = require('stream')
const {Buffer} = require('buffer')
const zstd = require ('node-zstandard')

module.exports = {
  encode: function(data, options = {}, callback) {
    const reader = new Readable({ read: function() {} })
    reader.push(data)
    reader.push(null)

    const tempfile = path.join(os.tmpdir(), 'content-encodings-zstd-test-file.zst')
    zstd.compressStreamToFile(reader, tempfile, function(err, result) {
      if (err) throw err

      result.on('error', function(err) {
        throw err
      })

      const encodedData = []
      const writer = new Writable()
      writer._write = function(chunk, enc, next) {
        encodedData.push(chunk)
        next()
      }

      result.on('end', function() {
        pipeline(
          fs.createReadStream(tempfile),
          writer,
          function(err) {
            if (err) return callback(err)
            return callback(null, Buffer.concat(encodedData))
          }
        )
      })
    })
  },
  decode: function(data, options = {}, callback) {
    const decodedData = []
    const tempfile = path.join(os.tmpdir(), 'content-encodings-zstd-test-file.zst')
    zstd.decompressionStreamFromFile(tempfile, function(err, result) {
      if (err) throw err

      result.on('error', function(err) {
        throw err
      })

      result.on('data', function(data) {
        decodedData.push(data)
      })

      result.on('end', function() {
        return callback(null, Buffer.concat(decodedData))
      })
    })
  }
}
