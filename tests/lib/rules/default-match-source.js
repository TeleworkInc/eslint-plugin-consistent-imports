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


const rule = require('../../../lib/rules/default-match-source');
const RuleTester = require('eslint').RuleTester;
const { camelCaseError } = require('../../../lib/camelCase');

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});


const ruleTester = new RuleTester();
ruleTester.run('default-match-source', rule, {

  valid: [
    `import foo from './path/to/foo.js'`,
    `import myTest from './path/to/myTest.js'`,
    `import myClass from './path/to/my-class.js'`,
    `import myPackage from 'my-package'`,
    `import myZip2 from 'my-zip2'`,
    // substr [import] in [src]
    `import shell from 'await-shell'`,
    `import pkg from 'my-pkg'`,
    `import pkg from 'myPkg'`,
    `import myPackage from 'long-name-my-package'`,
    // substr [src] in [import]
    `import devCli from './dist/cli.mjs'`,
    `import distCli from './dist/cli.cjs'`,
  ],

  invalid: [
    {
      code: `import bar from './path/to/foo.js';`,
      errors: [camelCaseError('bar', 'foo')],
      output: `import foo from './path/to/foo.js';`,
    },
    {
      code: `import bar from 'my-awesome-package';`,
      errors: [camelCaseError('bar', 'my-awesome-package')],
      output: `import myAwesomePackage from 'my-awesome-package';`,
    },
    {
      code: `import bar from './path/to/an-awesome-file.js';`,
      errors: [camelCaseError('bar', 'an-awesome-file')],
      output: `import anAwesomeFile from './path/to/an-awesome-file.js';`,
    },
  ],
});
