var path = require('path');
var pkg = require('./package.json');

module.exports = {
  // cmd, homepage, bugs all pulled from package.json
  cmd: 'hashdard',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Hash Labs Styleguide',
  eslint: require('eslint'),
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
};
