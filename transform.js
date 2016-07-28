/**
 * Browserify transform
 * @function transformReact
 * @param {Object} options
 */
'use strict'

const transformES2015 = require('ababel-es2015/transform')

/** @lends transformReact */
function transformReact (options = {}) {
  let { presets } = options
  options.presets = [ 'react' ].concat(presets || [])
  return transformES2015(options)
}

module.exports = transformReact
