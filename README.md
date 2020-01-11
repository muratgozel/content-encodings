# Content Encodings
Content encoding and decoding library for node applications. Accepts anything, outputs buffer.

## Supported Encoding Types
- base64
- quoted-printable
- utf8
- ascii
- hex
- url
- gzip
- deflate
- brotli
- zstd

## Install
```
npm install content-encodings
```

## Usage
It's pretty straight-forward. The library has two method in its API. `encode` and `decode`.

### `.encode(type, data, ?options, ?callback)`
Encodes the `data` you sent according to the encoding `type` with `options`.

`callback` is necessary for compressors (`gzip`, `deflate`, `brotli`, `zstd`).

```js
// example hex encoding
const contentencodings = require('contentencodings')
contentencodings.encode('hex', 'lorem ipsum')
// outputs: 6c6f72656d20697073756d
```

```js
// example zstd encoding
const contentencodings = require('contentencodings')
contentencodings.encode('zstd', data, null, function(err, compressed) {
  // compressed data "compressed" is available as a buffer
})
```

More examples can be found in the `tests` folder.

### `.decode(type, data, ?options, ?callback)`
Decodes the encoded `data` you sent according to the encoding `type` with `options`.

`callback` is necessary for compressors (`gzip`, `deflate`, `brotli`, `zstd`).

```js
// example hex decoding
const contentencodings = require('contentencodings')
// toString because of output is buffer
contentencodings.decode('hex', '6c6f72656d20697073756d').toString('utf8')
// outputs: lorem ipsum
```

```js
// example zstd encoding
const contentencodings = require('contentencodings')
contentencodings.decode('zstd', data, null, function(err, decompressed) {
  // decompressed data "decompressed" is available as a buffer
})
```

More examples can be found in the `tests` folder.
