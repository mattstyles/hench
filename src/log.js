
const bole = require('bole')
const garnish = require('garnish')

const log = bole('hench')

const pretty = garnish({name:'hench'})
pretty.pipe(process.stdout)

bole.output({
  level: 'info',
  stream: pretty
})

module.exports = log
