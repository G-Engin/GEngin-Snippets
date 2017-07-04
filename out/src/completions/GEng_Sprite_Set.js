'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_MasseSet',
        documentation: 'Set Sprite mass (for collision calculation)',
    },
    {
        label: '_GEng_Sprite_PosSet',
        documentation: 'Set the position of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_SizeSet',
        documentation: 'Set the size of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_OriginSet',
        documentation: 'Set the origin point of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_OriginSetEx',
        documentation: 'Set the origin point of a Sprite Object, to some specifique presets (most commons)',
    },
    {
        label: '_GEng_Sprite_AngleOriginSet',
        documentation: 'Specify the angular origin of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_SpeedSet',
        documentation: 'Set the speed, and the max speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_SpeedAdd',
        documentation: 'Add values to the actual speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AccelSet',
        documentation: 'Set the acceleration of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AccelAdd',
        documentation: 'Add values to the actual acceleration of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_InnertieSet',
        documentation: 'Set the innertia of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleSet',
        documentation: 'Set the angle of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleAdd',
        documentation: 'Add a value to the actual angle of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleSpeedSet',
        documentation: 'Set the rotation (angular) speed, and the max rotation speed',
    },
    {
        label: '_GEng_Sprite_AngleSpeedAdd',
        documentation: 'Add a value to the actual rotation speed of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleAccelSet',
        documentation: 'Set the rotation (angular) acceleration of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_AngleAccelAdd',
        documentation: 'Add a value to the actual angular acceleration of a Sprite Object',
    },
    {
        label: '_GEng_sprite_AngleInnertieSet',
        documentation: 'Set the angular innertia of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_ColorMatrixTranslate',
        documentation: 'Change the color components of a Sprite Object',
    },
    {
        label: '_GEng_Sprite_ColorMatrixReset',
        documentation: 'Reset the colors of a Sprite Object',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sprite_Set.au3'
}

module.exports = items