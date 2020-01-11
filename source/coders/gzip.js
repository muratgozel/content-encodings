const {Readable, Writable, pipeline} = require('stream')
const zlib = require('zlib')
const {Buffer} = require('buffer')

module.exports = {
  encode: function(data, options, callback) {
    const encodedData = []
    const gzip = zlib.createGzip()

    const reader = new Readable({ read: function() {} })
    reader.push(data)
    reader.push(null)

    const writer = new Writable()
    writer._write = function(chunk, enc, next) {
      encodedData.push(chunk)
      next()
    }

    pipeline(
      reader,
      gzip,
      writer,
      function(err) {
        if (err) return callback(err)
        return callback(null, Buffer.concat(encodedData))
      }
    )
  },
  decode: function(data, options, callback) {
    const decodedData = []
    const gunzip = zlib.createGunzip()

    const reader = new Readable({ read: function() {} })
    reader.push(arguments[0])
    reader.push(null)

    const writer = new Writable()
    writer._write = function(chunk, enc, next) {
      decodedData.push(chunk)
      next()
    }

    pipeline(
      reader,
      gunzip,
      writer,
      function(err) {
        if (err) return callback(err)
        return callback(null, Buffer.concat(decodedData))
      }
    )
  }
}
