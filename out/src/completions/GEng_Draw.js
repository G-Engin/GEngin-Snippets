'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_ScrFlush',
        documentation: 'Flush the screen with a bakcground color',
    },
    {
        label: '_GEng_ScrUpdate',
        documentation: 'Validate all the drawings (Sprites, Text) and update the screen',
    },
    {
        label: '_GEng_FPS_Get',
        documentation: 'Returns the FPS',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Draw.au3'
}

module.exports = items