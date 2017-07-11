'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '$GEng_Color_Black',
        documentation: ''
    },
    {
        label: '$GEng_Color_Navy',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_Blue',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Green',
        documentation: ''
    },
    {
        label: '$GEng_Color_Teal',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkCyan',
        documentation: ''
    },
    {
        label: '$GEng_Color_DeepSkyBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkTurquoise',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumSpringGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Lime',
        documentation: ''
    },
    {
        label: '$GEng_Color_SpringGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Aqua',
        documentation: ''
    },
    {
        label: '$GEng_Color_Cyan',
        documentation: ''
    },
    {
        label: '$GEng_Color_MidnightBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_DodgerBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightSeaGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_ForestGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_SeaGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkSlateGray',
        documentation: ''
    },
    {
        label: '$GEng_Color_LimeGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumSeaGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Turquoise',
        documentation: ''
    },
    {
        label: '$GEng_Color_RoyalBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_SteelBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkSlateBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumTurquoise',
        documentation: ''
    },
    {
        label: '$GEng_Color_Indigo',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkOliveGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_CadetBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_CornflowerBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumAquaMarine',
        documentation: ''
    },
    {
        label: '$GEng_Color_DimGray',
        documentation: ''
    },
    {
        label: '$GEng_Color_SlateBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_OliveDrab',
        documentation: ''
    },
    {
        label: '$GEng_Color_SlateGray',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightSlateGray',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumSlateBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_LawnGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Chartreuse',
        documentation: ''
    },
    {
        label: '$GEng_Color_Aquamarine',
        documentation: ''
    },
    {
        label: '$GEng_Color_Maroon',
        documentation: ''
    },
    {
        label: '$GEng_Color_Purple',
        documentation: ''
    },
    {
        label: '$GEng_Color_Olive',
        documentation: ''
    },
    {
        label: '$GEng_Color_Gray',
        documentation: ''
    },
    {
        label: '$GEng_Color_SkyBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightSkyBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_BlueViolet',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkRed',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkMagenta',
        documentation: ''
    },
    {
        label: '$GEng_Color_SaddleBrown',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkSeaGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumPurple',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkViolet',
        documentation: ''
    },
    {
        label: '$GEng_Color_PaleGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkOrchid',
        documentation: ''
    },
    {
        label: '$GEng_Color_YellowGreen',
        documentation: ''
    },
    {
        label: '$GEng_Color_Sienna',
        documentation: ''
    },
    {
        label: '$GEng_Color_Brown',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkGray',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_GreenYellow',
        documentation: ''
    },
    {
        label: '$GEng_Color_PaleTurquoise',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightSteelBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_PowderBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_FireBrick',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkGoldenRod',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumOrchid',
        documentation: ''
    },
    {
        label: '$GEng_Color_RosyBrown',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkKhaki',
        documentation: ''
    },
    {
        label: '$GEng_Color_Silver',
        documentation: ''
    },
    {
        label: '$GEng_Color_MediumVioletRed',
        documentation: ''
    },
    {
        label: '$GEng_Color_IndianRed',
        documentation: ''
    },
    {
        label: '$GEng_Color_Peru',
        documentation: ''
    },
    {
        label: '$GEng_Color_Chocolate',
        documentation: ''
    },
    {
        label: '$GEng_Color_Tan',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightGrey',
        documentation: ''
    },
    {
        label: '$GEng_Color_PaleVioletRed',
        documentation: ''
    },
    {
        label: '$GEng_Color_Thistle',
        documentation: ''
    },
    {
        label: '$GEng_Color_Orchid',
        documentation: ''
    },
    {
        label: '$GEng_Color_GoldenRod',
        documentation: ''
    },
    {
        label: '$GEng_Color_Crimson',
        documentation: ''
    },
    {
        label: '$GEng_Color_Gainsboro',
        documentation: ''
    },
    {
        label: '$GEng_Color_Plum',
        documentation: ''
    },
    {
        label: '$GEng_Color_BurlyWood',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightCyan',
        documentation: ''
    },
    {
        label: '$GEng_Color_Lavender',
        documentation: ''
    },
    {
        label: '$GEng_Color_DarkSalmon',
        documentation: ''
    },
    {
        label: '$GEng_Color_Violet',
        documentation: ''
    },
    {
        label: '$GEng_Color_PaleGoldenRod',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightCoral',
        documentation: ''
    },
    {
        label: '$GEng_Color_Khaki',
        documentation: ''
    },
    {
        label: '$GEng_Color_AliceBlue',
        documentation: ''
    },
    {
        label: '$GEng_Color_HoneyDew',
        documentation: ''
    },
    {
        label: '$GEng_Color_Azure',
        documentation: ''
    },
    {
        label: '$GEng_Color_SandyBrown',
        documentation: ''
    },
    {
        label: '$GEng_Color_Wheat',
        documentation: ''
    },
    {
        label: '$GEng_Color_Beige',
        documentation: ''
    },
    {
        label: '$GEng_Color_WhiteSmoke',
        documentation: ''
    },
    {
        label: '$GEng_Color_MintCream',
        documentation: ''
    },
    {
        label: '$GEng_Color_GhostWhite',
        documentation: ''
    },
    {
        label: '$GEng_Color_Salmon',
        documentation: ''
    },
    {
        label: '$GEng_Color_AntiqueWhite',
        documentation: ''
    },
    {
        label: '$GEng_Color_Linen',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightGoldenRodYellow',
        documentation: ''
    },
    {
        label: '$GEng_Color_OldLace',
        documentation: ''
    },
    {
        label: '$GEng_Color_Red',
        documentation: ''
    },
    {
        label: '$GEng_Color_Fuchsia',
        documentation: ''
    },
    {
        label: '$GEng_Color_Magenta',
        documentation: ''
    },
    {
        label: '$GEng_Color_DeepPink',
        documentation: ''
    },
    {
        label: '$GEng_Color_OrangeRed',
        documentation: ''
    },
    {
        label: '$GEng_Color_Tomato',
        documentation: ''
    },
    {
        label: '$GEng_Color_HotPink',
        documentation: ''
    },
    {
        label: '$GEng_Color_Coral',
        documentation: ''
    },
    {
        label: '$GEng_Color_Darkorange',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightSalmon',
        documentation: ''
    },
    {
        label: '$GEng_Color_Orange',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightPink',
        documentation: ''
    },
    {
        label: '$GEng_Color_Pink',
        documentation: ''
    },
    {
        label: '$GEng_Color_Gold',
        documentation: ''
    },
    {
        label: '$GEng_Color_PeachPuff',
        documentation: ''
    },
    {
        label: '$GEng_Color_NavajoWhite',
        documentation: ''
    },
    {
        label: '$GEng_Color_Moccasin',
        documentation: ''
    },
    {
        label: '$GEng_Color_Bisque',
        documentation: ''
    },
    {
        label: '$GEng_Color_MistyRose',
        documentation: ''
    },
    {
        label: '$GEng_Color_BlanchedAlmond',
        documentation: ''
    },
    {
        label: '$GEng_Color_PapayaWhip',
        documentation: ''
    },
    {
        label: '$GEng_Color_LavenderBlush',
        documentation: ''
    },
    {
        label: '$GEng_Color_SeaShell',
        documentation: ''
    },
    {
        label: '$GEng_Color_Cornsilk',
        documentation: ''
    },
    {
        label: '$GEng_Color_LemonChiffon',
        documentation: ''
    },
    {
        label: '$GEng_Color_FloralWhite',
        documentation: ''
    },
    {
        label: '$GEng_Color_Snow',
        documentation: ''
    },
    {
        label: '$GEng_Color_Yellow',
        documentation: ''
    },
    {
        label: '$GEng_Color_LightYellow',
        documentation: ''
    },
    {
        label: '$GEng_Color_Ivory',
        documentation: ''
    },
    {
        label: '$GEng_Color_White',
        documentation: ''
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Variable
    i.detail = 'Variable global and constant of GEng_Color_Constants.au3'
}

module.exports = items