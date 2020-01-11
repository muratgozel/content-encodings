const querystring = require('querystring')

const {Buffer} = require('buffer')

module.exports = {
  encode: function() {
    return querystring.escape(arguments[0])
  },
  decode: function() {
    // convert encoded url to decoded string
    return querystring.unescape(arguments[0])
  }
}
