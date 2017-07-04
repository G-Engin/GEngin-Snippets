'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_AnimRewind',
        documentation: 'Reset the animation parameters of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_Animate',
        documentation: 'Animate a Sprite Object with a given Animation Object',
    },
    {
        label: '_GEng_Sprite_AnimDelayMultiplierGet',
        documentation: 'Get the value of the Frame delay multiplier of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AnimDelayMultiplierSet',
        documentation: 'Set the value of the Frame delay multiplier of a Sprite Object',
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Animation.au3'
}

module.exports = items