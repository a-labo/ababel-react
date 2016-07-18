/**
 * Test case for ababelReact.
 * Runs with mocha.
 */
'use strict'

const ababelReact = require('../lib/ababel_react.js')
const assert = require('assert')
const co = require('co')

describe('ababel-react', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Ababel react', () => co(function * () {
    yield ababelReact(
      'mocks/*.jsx',
      {
        cwd: `${__dirname}/../misc`,
        out: `${__dirname}/../tmp/testing-compiled`,
        minified: true
      }
    )
  }))
})

/* global describe, before, after, it */
