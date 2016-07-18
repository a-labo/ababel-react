/**
 * React flavor ababel
 * @module ababel-react
 */

'use strict'

const ababelReact = require('./ababel_react')

let lib = ababelReact.bind(this)

Object.assign(lib, ababelReact, {
  ababelReact
})

module.exports = lib
