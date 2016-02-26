# magical-mv [![NPM version](https://img.shields.io/npm/v/magical-mv.svg)](https://npmjs.com/package/magical-mv) [![NPM downloads](https://img.shields.io/npm/dm/magical-mv.svg)](https://npmjs.com/package/magical-mv) [![Build Status](https://img.shields.io/circleci/project/egoist/magical-mv/master.svg)](https://circleci.com/gh/egoist/magical-mv)

> mv with data replacement.

## Install

```bash
$ npm install --save magical-mv
```

## Usage

```js
const mv = require('magical-mv')

/** source.js:
hello {{ name }}
*/
mv('./source.js', './output.js', {name: 'egoist'})
	.then(content => {
		console.log('Done!')
	})
/** output.js:
hello egoist
*/
```

## API

### mv(from, to, [data, handlebarsOpts])

**from** `String` source file

**to** `String` output file

**data** `Object` The data to render template

**handlebarsOpts** `Object` Options for `handlebars.compile`

## mv.sync

Same options but synchronously.

## License

MIT © [EGOIST](https://github.com/egoist)
