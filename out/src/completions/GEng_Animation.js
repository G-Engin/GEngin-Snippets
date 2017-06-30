'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Anim_Create',
        documentation: 'Create an Animation Object',
    },
    {
        label: '_GEng_Anim_FrameCount',
        documentation: 'Get the number of frames in an Animation Object',
    },
    {
        label: '_GEng_Anim_FrameAdd',
        documentation: 'Add a frame to an Animation Object',
    },
    {
        label: '_GEng_Anim_FrameMod',
        documentation: 'Modify an Animation Object\'s frame',
    },
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Animation.au3'
}

module.exports = items