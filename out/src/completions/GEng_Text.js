'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Font_Create',
        documentation: 'Creates a Font Object to be used by Text Object',
    },
    {
        label: '_GEng_Font_Delete',
        documentation: 'Deletes a Font Object',
    },
    {
        label: '_GEng_Text_Create',
        documentation: 'Creates a Text Object',
    },
    {
        label: '_GEng_Text_Delete',
        documentation: 'Delete a Text Object',
    },
    {
        label: '_GEng_Text_FontSet',
        documentation: 'Modify the Font Object of a Text Object',
    },
    {
        label: '_GEng_Text_StringSet',
        documentation: 'Modify the text string of a Text Object',
    },
    {
        label: '_GEng_Text_StringGet',
        documentation: 'Returns the actual text string of a Text Object',
    },
    {
        label: '_GEng_Text_PosSet',
        documentation: 'Changes the position and the dimensions of the rectangle containing the text of a Text Object',
    },
    {
        label: '_GEng_Text_PosGet',
        documentation: 'Get the position and dimensions of a Text Object',
    },
    {
        label: '_GEng_Text_SizeMeasure',
        documentation: 'Returns the dimension needed to display $sText with $hFont',
    },
    {
        label: '_GEng_Text_ColorSet',
        documentation: 'Change the color of a Text Object',
    },
    {
        label: '_GEng_Text_Draw',
        documentation: 'Draw a Text Object',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Text.au3'
}

module.exports = items