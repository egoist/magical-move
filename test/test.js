import test from 'ava'
import mv from '../'
import fs from 'fs-promise'

function has(fp, text) {
	return fs.readFile(fp, 'utf8')
		.then(data => data.indexOf(text) > -1)
}

test('sync', async t => {
	await fs.writeFile('./example_sync.js', 'hello {{name}}', 'utf8')
	mv.sync('./example_sync.js', './_example_sync.js', {name: 'egoistSync'})
	t.true(await has('./_example_sync.js', 'egoistSync'))
})

test('async', async t => {
	await fs.writeFile('./example.js', 'hello {{name}}', 'utf8')
	await mv('./example.js', './_example.js', {name: 'egoist'})
	t.true(await has('./_example.js', 'egoist'))
})
