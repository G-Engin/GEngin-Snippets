'use strict'

var { languages, Completion, CompletionItem, } = require('vscode')
var fs = require('fs')
var completions = []
var addJSON

var files = fs.readdirSync(__dirname + '/completions')
for (var i in files) {
    addJSON = require('./completions/' + files[i])
    completions = completions.concat(addJSON)
}

module.exports = languages.registerCompletionItemProvider({ language: 'autoit', scheme: 'file' }, {
    provideCompletionItems(document, position, token) {
        return completions;
    }
}, '.', '$')