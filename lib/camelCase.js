/**
 * @license MIT
 */
/**
 * @fileoverview
 * Export global constants and errors.
 *
 * @author Christian Lewis
 */

const DEFAULT_CAMELCASE = 'Variable name for default import should be ' +
                          'camelcase version of filename or package name.';

const raiseFirstLetter = (str) => {
  const newFirst = str[0].toUpperCase();
  return newFirst + str.substr(1);
};

const lowerFirstLetter = (str) => {
  const newFirst = str[0].toLowerCase();
  return newFirst + str.substr(1);
};

const toCamelCase = (str) => lowerFirstLetter(
    str.split(/[^a-z0-9]/i)
        .map(raiseFirstLetter)
        .join(''),
);

module.exports = {
  DEFAULT_CAMELCASE,
  toCamelCase,
};
