# JavaScript Hash Labs Style
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![bitHound Dependencies](https://www.bithound.io/github/hashlabs/hashdard/badges/dependencies.svg)](https://www.bithound.io/github/hashlabs/hashdard/master/dependencies/npm)

Based on the goodness of [feross/standard], with some small changes.

## Install

```bash
npm install hashdard
```

## Rules

Importantly:

- **semicolons**
- **no space-after-function-name**
- **no space-after-function-name**
- **always object-curly-spacing**
- Check [feross/standard] for the rest of the rules.

## Usage

Install globally.

```bash
npm install hashdard -g
```

Or locally, depending what you need globally

```bash
npm install hashdard --save-dev
```

After you've done that you should be able to use the `hashdard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ hashdard
Error: Use JavaScript Hash Labs Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can autofix errors using the `--fix` parameter

```
$ hashdard --fix
```

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "hashdard": {
    "parser": "babel-eslint"
  }
}
```

### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add these lines to `.vimrc`:

```vim
let g:syntastic_javascript_checkers=['hashdard']
let g:syntastic_javascript_standard_exec = 'hashdard'
```

For automatic formatting on save, add these two lines to `.vimrc`:

[vim-1]: https://github.com/scrooloose/syntastic

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `hashdard.ignore` property to `package.json`:

```json
"hashdard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

See [feross/standard] for more information.

[npm-image]: https://img.shields.io/npm/v/hashdard.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hashdard
[downloads-image]: https://img.shields.io/npm/dm/hashdard.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/hashdard
[feross/standard]: https://github.com/feross/standard
