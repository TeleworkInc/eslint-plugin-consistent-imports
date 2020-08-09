/**
 * @license MIT
 */
/**
 * @fileoverview
 * ESLint rules to enforce consistent variable names for default imports.
 *
 * @author Christian Lewis
 */
'use strict';

const requireIndex = require('requireindex');
const rules = requireIndex(__dirname + '/rules');

// enable all by default
const configs = {
  recommended: {
    rules: {
      'consistent-imports/default-match-source': 2,
    },
  },
};

module.exports = {
  configs,
  rules,
};
