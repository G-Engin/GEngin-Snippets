'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_Move',
        documentation: 'Calculates the update of the position and\nangle of a sprite by its dynamic parameters',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Dynamics.au3'
}

module.exports = items