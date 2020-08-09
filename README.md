# eslint-plugin-consistent-imports

ESLint rules to enforce consistent variable names for default imports. Add
`plugin:consistent-imports/recommended` to your `extends` setting for quick startup.

```javascript
valid: [
    `import foo from './path/to/foo.js';`,
    `import myTest from './path/to/myTest.js';`,
    `import myClass from './path/to/my-class.js';`,
    `import myPackage from 'my-package'`,
    `import myZip2 from 'my-zip2'`,
]
...
invalid: [
    `import bar from './path/to/foo.js';`,
    // import foo from './path/to/foo.js';

    `import bar from 'my-awesome-package';`
    // import myAwesomePackage from 'my-awesome-package';
    
    `import bar from './path/to/an-awesome-file.js';`
    // import anAwesomeFile from './path/to/an-awesome-file.js';
]
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-consistent-imports`:

```
$ npm install eslint-plugin-consistent-imports --save-dev
```


## Usage

Add `consistent-imports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "consistent-imports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "consistent-imports/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





