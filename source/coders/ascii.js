const {Buffer} = require('buffer')

module.exports = {
  encode: function() {
    let buf = arguments[0]
    if (!Buffer.isBuffer(arguments[0])) buf = Buffer.from(arguments[0])
    return buf.toString('ascii')
  },
  decode: function() {
    // convert ascii encoded data to buffer
    return Buffer.from(arguments[0], 'ascii')
  }
}
