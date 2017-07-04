'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_CollisionSet',
        documentation: 'Define the collision shape of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_Collision',
        documentation: 'Test if 2 sprites collides',
    },
    {
        label: '_GEng_Sprite_CollisionScrBorders',
        documentation: 'Test collision between a Sprite Object and all screen borders',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Collision.au3'
}

module.exports = items