#!/usr/bin/env node

var minimist = require('minimist')
var data = minimist(process.argv.slice(2))
var mv = require('./')

mv.sync(data._[0], data._[1], data)
