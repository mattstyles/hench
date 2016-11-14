
# hench

> Zero config static server

[![Build Status](https://travis-ci.org/mattstyles/hench.svg?branch=composer)](https://travis-ci.org/mattstyles/hench)
[![npm version](https://badge.fury.io/js/hench.svg)](https://badge.fury.io/js/hench)
[![Dependency Status](https://david-dm.org/mattstyles/hench.svg)](https://david-dm.org/mattstyles/hench)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

Install with [npm](https://npmjs.com)

```sh
$ npm i -S hench
```

## Example

```sh
$ cd /projects/my-awesome-project
$ hench
```

Hench will start serving any files found at `/projects/my-awesome-project`, that’s it. No magic, no fuss, just serving stuff.

## Programmatic Example

```js
const app = require('hench')
app.listen(3000, () => {
  console.log('Listening on 3000')
})
```

## Running tests

```sh
$ npm install
$ npm test
```

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `npm test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/hench/issues).

## License

MIT
