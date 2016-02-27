'use strict'

var fs = require('fs')
var fsPromise = require('fs-promise')
var h = require('handlebars')

module.exports = function (from, to, data, handlebarsOpts) {
	if (!from || !to) {
		throw new Error('Expected location')
	}

	return fsPromise.readFile(from, 'utf8')
		.then(function (content) {
			if (data) {
				var template = h.compile(content, handlebarsOpts)
				content = template(data)
			}
			return fsPromise.writeFile(to, content, 'utf8')
		})
		.then(function () {
			return fsPromise.unlink(from)
		})
}

module.exports.sync = function (from, to, data, handlebarsOpts) {
	if (!from || !to) {
		throw new Error('Expected location')
	}

	var content = fs.readFileSync(from, 'utf8')

	if (data) {
		var template = h.compile(content, handlebarsOpts)
		content = template(data)
	}

	fs.writeFileSync(to, content, 'utf8')
	fs.unlinkSync(from)
}
