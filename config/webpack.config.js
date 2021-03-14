'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    options: PATHS.src + '/options.js',
    popup: PATHS.src + '/popup.js',
  },
});

module.exports = config;
