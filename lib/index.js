/**
 * React flavor ababel
 * @module ababel-react
 */

'use strict'

const ababelReact = require('./ababel_react')

let lib = ababelReact.bind(this)

Object.assign(lib, ababelES2015, {
  ababelReact
})

module.exports = lib