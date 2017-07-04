'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_Create',
        documentation: 'Creates a Sprite Object',
    },
    {
        label: '_GEng_Sprite_ImageSet',
        documentation: 'Assigne an image object, or a part of it to a sprite',
    },
    {
        label: '_GEng_Sprite_ImageSetRect',
        documentation: 'Specifiy the part (rectangle) of the Image Object actually assigned to the Sprite that will be drawn',
    },
    {
        label: '_GEng_Sprite_Draw',
        documentation: 'Draws a sprite at it\'s current position and angle',
    },
    {
        label: '_GEng_Sprite_Delete',
        documentation: 'Delete a Sprite Object',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite.au3'
}

module.exports = items