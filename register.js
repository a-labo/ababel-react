/**
 * Register babel
 * @function registerReact
 * @param {Object} options
 */
'use strict'

const registerES2015 = require('ababel-es2015/register')

/** @lends registerReact */
function registerReact (options = {}) {
  let { presets } = options
  options.presets = [ 'react' ].concat(presets || [])
  registerES2015(options)
}

module.exports = registerReact
