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

const { basename, extname } = require('path');
const { camelCaseError, toCamelCase } = require('../camelCase');

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
      const singleImport = node.specifiers.length === 1;
      const importNode = node.specifiers[0];
      const sourceNode = node.source;
      const camelCaseSource = toCamelCase(node.source.value);

      /**
       * If import name is case-insensitive substring of source name, allow.
       *
       * i.e., `import pkg from 'my-pkg'`
       */
      if (sourceNode.value.toLowerCase().includes(
          importNode.local.name.toLowerCase())) {
        return;
      }

      if (
        sourceNode.type === 'Literal' &&
        singleImport &&
        importNode.type === 'ImportDefaultSpecifier' &&
        importNode.local.name !== camelCaseSource
      ) {
        context.report({
          node,
          message: camelCaseError(
              importNode.local.name,
              basename(sourceNode.value, extname(sourceNode.value)),
          ),
          fix: (fixer) => fixer.replaceText(importNode, camelCaseSource),
        });
      }
    },
  }),
};
