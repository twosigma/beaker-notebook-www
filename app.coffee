axis         = require 'axis'
autoprefixer = require 'autoprefixer-stylus'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  stylus:
    use: [axis(), autoprefixer()]

  server:
    "clean_urls": true
