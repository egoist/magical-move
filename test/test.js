import test from 'ava'
import mv from '../'
import fs from 'fs-promise'

function has(fp, text) {
	return fs.readFile(fp, 'utf8')
		.then(data => data.indexOf(text) > -1)
}

test('sync', async t => {
	mv.sync('./example.js', './_example_sync.js', {name: 'egoist'})
	t.true(await has('./_example_sync.js', 'egoist'))
})

test('async', async t => {
	await mv('./example.js', './_example.js', {name: 'egoist'})
	t.true(await has('./_example.js', 'egoist'))
})
