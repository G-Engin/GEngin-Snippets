'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Start',
        documentation: 'Starts G-Engin, and creates a display window',
    },
    {
        label: '_GEng_Shutdown',
        documentation: 'Stops G-Engin, deletes the display window, and free all the resources',
    },
    {
        label: '_GEng_SetDebug',
        documentation: 'Change debug mode, or get it\'s current status',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_System.au3'
}

module.exports = items