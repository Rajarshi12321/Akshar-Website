[![npm](https://nodei.co/npm/herror.png)](https://nodei.co/npm/herror/)

# herror

[![Dependency Status][david-badge]][david]

Simple HTTP error constructor, as if this problem is still open.

[david]: https://david-dm.org/eush77/herror
[david-badge]: https://david-dm.org/eush77/herror.png

## Example

```js
var err = herror(403);

err.code
//=> 403

err.message
//=> "403 Forbidden"

err.toString()
//=> "Error: 403 Forbidden"
```

## API

### `err = herror(code)`

Make new error from HTTP status code.

## Install

```
npm install herror
```

## License

MIT
