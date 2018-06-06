'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.3.71:5001/api"'
  // BASE_API: '"http://192.168.3.128:5001/api"'
})
