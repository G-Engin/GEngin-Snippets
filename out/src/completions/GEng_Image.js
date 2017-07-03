'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_ImageLoad',
        documentation: 'Creates an image object from a file, or a rectangular part of a file',
    },
    {
        label: '_GEng_ImageLoadStream',
        documentation: 'Creates an image object from a string representing binary image file data',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Image.au3'
}

module.exports = items