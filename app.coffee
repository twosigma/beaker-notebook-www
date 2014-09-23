axis            = require 'axis'
autoprefixer    = require 'autoprefixer-stylus'
ClientTemplates = require('client-templates')

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', '**/*.swp']
  watcher_ignores: ['**/*.swp']
  stylus:
    use: [axis(), autoprefixer()]

  server:
    "clean_urls": true

  extensions: [ClientTemplates(
    base: "views/templates/",
    pattern: "*.jade",
    out: "js/templates.js"
  )]
