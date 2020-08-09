/**
 * @license MIT
 */
/**
 * @fileoverview The variable name for a default import should be a camelcase
 * alphanumeric version of the filename.
 *
 * @author Christian Lewis
 */
'use strict';


const rule = require('../../../lib/rules/default-variable-match-filename');

const { DEFAULT_CAMELCASE } = require('../../../lib/camelCase');
const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});


const ruleTester = new RuleTester();
ruleTester.run('default-variable-match-filename', rule, {

  valid: [
    `import foo from './path/to/foo.js';`,
    `import myTest from './path/to/myTest.js';`,
    `import myClass from './path/to/my-class.js';`,
    `import myPackage from 'my-package'`,
    `import myZip2 from 'my-zip2'`,
  ],

  invalid: [
    {
      code: `import bar from './path/to/foo.js';`,
      errors: [
        DEFAULT_CAMELCASE,
      ],
    },
  ],
});
