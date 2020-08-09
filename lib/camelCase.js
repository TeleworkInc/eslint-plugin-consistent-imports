/**
 * @license MIT
 */
/**
 * @fileoverview
 * Export global constants and errors.
 *
 * @author Christian Lewis
 */

const { basename, extname } = require('path');

const raiseFirstLetter = (str) => {
  const newFirst = (str[0] || '').toUpperCase();
  return newFirst + str.substr(1);
};

const lowerFirstLetter = (str) => {
  const newFirst = (str[0] || '').toLowerCase();
  return newFirst + str.substr(1);
};

const toCamelCase = (str) => {
  str = basename(str, extname(str))
      .split(/[^a-z0-9]/i)
      .map(raiseFirstLetter)
      .join('');

  return lowerFirstLetter(str);
};

const camelCaseError = (defaultName, sourceName) => {
  return `Variable name '${defaultName}' for default import should match` +
  ` source name '${sourceName}'. They can also be substrings of each other.`;
};

module.exports = {
  camelCaseError,
  toCamelCase,
};
