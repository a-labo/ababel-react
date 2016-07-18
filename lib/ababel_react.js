/**
 * Compile react javascripts
 * @function ababelReact
 * @param {string} pattern - Glob file name pattern
 * @param {Object} [options] - Optional settings
 */
'use strict'

const ababelES2015 = require('ababel-es2015')

/** @lends ababelReact */
function ababelReact (pattern, options = {}) {
  let { presets } = options
  options.presets = [ 'react' ].concat(presets || [])
    .filter((name, i, array) => array.indexOf(name) === i)
  return ababelES2015(pattern, options)
}

module.exports = ababelReact
