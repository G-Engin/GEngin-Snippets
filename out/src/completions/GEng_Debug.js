'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Debug_DrawVector',
        documentation: '',
    },
    {
        label: '_GEng_Debug_DrawVectAngle',
        documentation: '',
    },
    {
        label: '_GEng_Debug_DrawLine',
        documentation: '',
    },
    {
        label: '_GEng_Debug_DrawLineAngle',
        documentation: '',
    },
    {
        label: '_GEng_Debug_DrawRect',
        documentation: '',
    },
    {
        label: '_GEng_Debug_DrawCircle',
        documentation: '',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Debug.au3'
}

module.exports = items