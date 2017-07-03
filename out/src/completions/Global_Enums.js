'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$GEng_Origin_Mid',
        documentation: 'Middle\nGlobal enum of file GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_TL',
        documentation: 'Top Left\nGlobal enum of file GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_TR',
        documentation: 'Top Right\nGlobal enum of file GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_BL',
        documentation: 'Bottom Left\nGlobal enum of file GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_BR',
        documentation: 'Bottom Right\nGlobal enum of file GEng_Sprite.au3'
    },
    {
        label: '$GEng_Origin_Mid',
        documentation: 'Global enum of file GEng_Sprite.au3'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Enum
    i.detail = 'Global Enum of G-Engin'
}

module.exports = items