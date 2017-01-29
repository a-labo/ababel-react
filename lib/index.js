/**
 * React flavor ababel
 * @module ababel-react
 * @version 2.0.0
 */

'use strict'

const ababelReact = require('./ababel_react')

let lib = ababelReact.bind(this)

Object.assign(lib, ababelReact, {
  ababelReact
})

module.exports = lib
