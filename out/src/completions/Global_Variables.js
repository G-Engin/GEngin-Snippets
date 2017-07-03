'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$ghGDIPDll',
        documentation: 'Value = \'user32.dll\'\nFile GEng_System.au3'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Variable
    i.detail = 'Global variable of G-Engin'
}

module.exports = items