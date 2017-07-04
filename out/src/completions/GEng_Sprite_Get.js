'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_MassGet',
        documentation: 'Get a sprite\'s mass',
    },
    {
        label: '_GEng_Sprite_PosGet',
        documentation: 'Get the position of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_SizeGet',
        documentation: 'Get the size of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_OriginGet',
        documentation: 'Get the origin point of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_SpeedGet',
        documentation: 'Get the speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_MaxSpeedGet',
        documentation: 'Get the maximum speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AccelGet',
        documentation: 'Get the acceleration of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_InnertieGet',
        documentation: 'Get the innertia of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleGet',
        documentation: 'Get the angle of a Sprite Object (degrees Or radians)',
    },
    {
        label: '_GEng_Sprite_AngleOriginGet',
        documentation: 'Get then angular origin of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleSpeedGet',
        documentation: 'Get the rotation speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleMaxSpeedGet',
        documentation: 'Get the maximum rotation speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleAccelGet',
        documentation: 'Get the rotation acceleration of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleInnertieGet',
        documentation: 'Get the rotation innertia of a Sprite Object',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Get.au3'
}

module.exports = items