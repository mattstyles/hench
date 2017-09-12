
const pkg = require('../package.json')

console.log(`
  ${pkg.name} v${pkg.version}

  Usage:

    $ ${pkg.name}
    $ ${pkg.name} [path]
`)
