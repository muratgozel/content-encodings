function ContentEncodings() {
  this.coders = require('./coders')
}

ContentEncodings.prototype.encode = function encode(name, data, options, callback) {
  if (!this.coders.hasOwnProperty(name)) return false;
  return this.coders[name].encode(data, options, callback)
}

ContentEncodings.prototype.decode = function decode(name, data, options, callback) {
  if (!this.coders.hasOwnProperty(name)) return false;

  return this.coders[name].decode(data, options, callback)
}

module.exports = new ContentEncodings()
