const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const jsxBootstrap = require('../..')

const jsxBootstrapTestSuite = {
    context,
    'should be a function'() {
        equal(typeof jsxBootstrap, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            jsxBootstrap()
        })
    },
}

module.exports = jsxBootstrapTestSuite
