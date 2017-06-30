'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$__GEng_hGui',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_WinW',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_WinH',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_hGraphic',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_hBuffer',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_hDC',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_hCompatibleDC',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_FPSTimer',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_FPSDisplayTimer',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_PI',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$__GEng_Debug',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_Arrow',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_Arrow0',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_Arrow1',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_Arrow2',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_Arrow3',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_Arrow4',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_pen0',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_pen1',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_pen2',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_pen3',
        documentation: 'Global variable of G-Engin'
    },
    {
        label: '$_dbg_pen4',
        documentation: 'Global variable of G-Engin'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Variable
    i.detail = 'Global Variable'
}

module.exports = items