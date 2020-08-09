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

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const requireIndex = require('requireindex');

// -----------------------------------------------------------------------------
// Plugin Definition
// -----------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules');
