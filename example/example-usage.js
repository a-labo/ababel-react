'use strict'

const ababelReact = require('ababel-react')

const co = require('co')

co(function * () {
  yield ababelReact('**/*.jsx', {
    cwd: 'src',
    out: 'dest',
    minified: true
  })
}).catch((err) => console.error(err))
