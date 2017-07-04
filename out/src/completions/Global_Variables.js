'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$ghGDIPDll',
        documentation: 'Value = \'user32.dll\'\nFile GEng_System.au3'
    },
    {
        label: '$GEng_ScrBorder_Top',
        documentation: 'Upper screen edge\nValue = 1\nFile GEng_Sprite_Collision.au3'
    },
    {
        label: '$GEng_ScrBorder_Bot',
        documentation: 'Bottom screen edge\nValue = 2\nFile GEng_Sprite_Collision.au3'
    },
    {
        label: '$GEng_ScrBorder_Left',
        documentation: 'Left screen edge\nValue = 3\nFile GEng_Sprite_Collision.au3'
    },
    {
        label: '$GEng_ScrBorder_Right',
        documentation: 'Right screen edge\nValue = 4\nFile GEng_Sprite_Collision.au3'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Variable
    i.detail = 'Global variable of G-Engin'
}

module.exports = items