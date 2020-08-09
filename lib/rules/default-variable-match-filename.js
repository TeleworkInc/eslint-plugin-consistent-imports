/**
 * @license MIT
 */
/**
 * @fileoverview
 * The variable name for a default import should be a camelcase alphanumeric
 * version of the filename.
 *
 * @author Christian Lewis
 */
'use strict';
const { DEFAULT_CAMELCASE, toCamelCase } = require('../camelCase');
const { basename, extname } = require('path');

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'enforce consistent default imports',
      category: 'es6',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },

  create: (context) => ({
    'ImportDeclaration': (node) => {
      if (
        node.source.type === 'Literal' &&
        node.specifiers.length === 1 &&
        node.specifiers[0].type === 'ImportDefaultSpecifier' &&
        node.specifiers[0].local.name !== toCamelCase(
            basename(node.source.value, extname(node.source.value)),
        )
      ) {
        context.report(
            node,
            DEFAULT_CAMELCASE,
        );
      }
    },
  }),
};
