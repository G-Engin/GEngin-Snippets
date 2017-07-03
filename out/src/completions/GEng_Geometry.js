'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sprite_PointGet',
        documentation: 'Returns the word\'s relatvie position of a sprite\'s relative point',
    },
    {
        label: '_GEng_PointToPoint_Dist',
        documentation: 'Returns the distance between 2 points',
    },
    {
        label: '_GEng_PointToPoint_Angle',
        documentation: 'Returns the angle between 2 points',
    },
    {
        label: '_GEng_PointToPoint_Vector',
        documentation: 'Returns a vector oriented from the first point to the second',
    },
    {
        label: '_GEng_SpriteToPoint_Dist',
        documentation: 'Returns the distance between a Sprite Object and a point',
    },
    {
        label: '_GEng_SpriteToPoint_Angle',
        documentation: 'Returns the angle between a Sprite Object and a point',
    },
    {
        label: '_GEng_SpriteToPoint_AngleDiff',
        documentation: 'Returns the angle between a Sprite Object and a point,\nrelativelly to the actual angle of the Sprite Object',
    },
    {
        label: '_GEng_SpriteToPoint_Vector',
        documentation: 'Returns a vector oriented from a Sprite Object to a point',
    },
    {
        label: '_GEng_SpriteToSprite_Dist',
        documentation: 'Returns the distance between 2 Sprite Objects',
    },
    {
        label: '_GEng_SpriteToSprite_Angle',
        documentation: 'Returns the angle from the first Sprite Object to the second',
    },
    {
        label: '_GEng_SpriteToSprite_AngleDiff',
        documentation: 'Returns the angle between a Sprite Object and another,\nrelativelly to the actual angle of the first Sprite Object',
    },
    {
        label: '_GEng_SpriteToSprite_Vector',
        documentation: 'Returns a vector oriented from a Sprite Object to another',
    },
    {
        label: '_GEng_AngleToVector',
        documentation: 'Returns a vector from an Angle and a Lenght',
    },
    {
        label: '_GEng_VectorToAngle',
        documentation: 'Returns an Angle from a Vector',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Geometry.au3'
}

module.exports = items