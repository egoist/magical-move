'use strict'
var fs = require('fs')
var pify = require('pify')
var nunjucks = require('nunjucks')

nunjucks.configure({autoescape: true})

module.exports = function (from, to, data) {
	if (!from || !to) {
		throw new Error('Expected location')
	}
	data = data || {}

	return pify(fs.readFile)(from, 'utf8')
		.then(function (content) {
			content = nunjucks.renderString(content, data)
			return pify(fs.writeFile)(to, content, 'utf8')
		})
		.then(function () {
			return pify(fs.unlink)(from)
		})
}

module.exports.sync = function (from, to, data) {
	if (!from || !to) {
		throw new Error('Expected location')
	}

	var content = fs.readFileSync(from, 'utf8')
	content = nunjucks.renderString(content, data)

	fs.writeFileSync(to, content, 'utf8')
	fs.unlinkSync(from)
}
