
const pkg = require('../package.json')

const bole = require('bole')
const garnish = require('garnish')

const log = bole(pkg.name)

const pretty = garnish({name: pkg.name})
pretty.pipe(process.stdout)

bole.output({
  level: 'info',
  stream: pretty
})

module.exports = log
