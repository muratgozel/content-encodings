const QuotedPrintable = require('@ronomon/quoted-printable')

module.exports = {
  encode: function() {
    const buf = Buffer.isBuffer(arguments[0])
      ? arguments[0]
      : Buffer.from(arguments[0])

    return QuotedPrintable.encode(buf, arguments[1] || {}).toString('ascii')
  },
  decode: function() {
    const buf = Buffer.isBuffer(arguments[0])
      ? arguments[0]
      : Buffer.from(arguments[0])

    return QuotedPrintable.decode(buf, arguments[1] || {})
  }
}
