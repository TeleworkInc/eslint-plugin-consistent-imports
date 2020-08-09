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

const bidirectionalSubstrCheck = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  return str1.includes(str2) || str2.includes(str1);
};

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

      const importName = importNode.local.name;
      const sourceName = sourceNode.value;

      /**
       * Make sure we're talking about just a single default import.
       */
      if (
        sourceNode.type === 'Literal' &&
        singleImport &&
        importNode.type === 'ImportDefaultSpecifier'
      ) {
        const camelCaseSource = toCamelCase(sourceName);

        /**
         * If import name is case-insensitive substring of source name, allow.
         *
         * i.e., `import pkg from 'my-pkg'`
         */
        if (bidirectionalSubstrCheck(importName, camelCaseSource)) {
          return;
        }

        if (importName !== camelCaseSource) {
          context.report({
            node,
            message: camelCaseError(
                importName,
                basename(sourceName, extname(sourceName)),
            ),
            fix: (fixer) => fixer.replaceText(importNode, camelCaseSource),
          });
        }
      }
    },
  }),
};
