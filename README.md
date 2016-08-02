# magical-move [![NPM version](https://img.shields.io/npm/v/magical-move.svg)](https://npmjs.com/package/magical-move) [![NPM downloads](https://img.shields.io/npm/dm/magical-move.svg)](https://npmjs.com/package/magical-move) [![Build Status](https://img.shields.io/circleci/project/egoist/magical-move/master.svg)](https://circleci.com/gh/egoist/magical-move)

> mv with data replacement.

If you wanna copy and parse content, use [mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor#copytplfrom-to-context-options) instead.

## Install

```bash
$ npm install --save magical-move
```

## Usage

```js
const move = require('magical-move')

/** source.js, in nunjucks template syntax:
hello {{ name }}
*/
async function main() {
	await move('./source.js', './output.js', {name: 'egoist'})
}
/** output.js:
hello egoist
*/
```

## CLI

### Install

```bash
$ npm install -g magical-move
```

### Usage

```bash
# same result as above
$ move source.js output.js --name egoist
```

## API

### move(from, to, [data, nunjucksOptions])

**from** `String` source file

**to** `String` output file

**data** `Object` The data to render template

**nunjucksOptions** https://mozilla.github.io/nunjucks/api.html#configure

### move.sync

Same options but synchronously.

## License

MIT © [EGOIST](https://github.com/egoist)
