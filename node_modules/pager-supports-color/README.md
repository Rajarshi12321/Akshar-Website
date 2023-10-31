[![npm](https://nodei.co/npm/pager-supports-color.png)](https://npmjs.com/package/pager-supports-color)

# pager-supports-color

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Detect whether `$PAGER` supports ANSI color escape sequences.

[travis]: https://travis-ci.org/eush77/pager-supports-color
[travis-badge]: https://travis-ci.org/eush77/pager-supports-color.svg
[david]: https://david-dm.org/eush77/pager-supports-color
[david-badge]: https://david-dm.org/eush77/pager-supports-color.png

## Usage

```js
pagerSupportsColor('less')
//=> false

pagerSupportsColor('less', ['-R'])
//=> true

process.env.PAGER = 'less';
process.env.LESS = '-R';
pagerSupportsColor()
//=> true
```

## API

#### `pagerSupportsColor([pager], [argv])`

`pager` defaults to `process.env.PAGER`.

Returns `true` or `false`.

## Install

```
npm install pager-supports-color
```

## License

MIT
