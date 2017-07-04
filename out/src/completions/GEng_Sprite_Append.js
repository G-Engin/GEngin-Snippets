'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_ExtInfoAdd',
        documentation: 'Append some value to a Sprite Object',
    },
    {
        label: '_GEng_Sprite_ExtInfoSet',
        documentation: 'Modifie an appended value',
    },
    {
        label: '_GEng_Sprite_ExtInfoGet',
        documentation: 'Read an appended value',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Append.au3'
}

module.exports = items