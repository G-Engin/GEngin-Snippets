'use strict'

var { CompletionItemKind } = require('vscode')

var items = [{
        label: '_GEng_Sound_Init',
        documentation: 'Initialize the sound system',
    },
    {
        label: '_GEng_Sound_Shutdown',
        documentation: 'Shutdown sound system and free resources',
    },
    {
        label: '_GEng_Sound_GlobalVolume',
        documentation: 'Set or Get the global application sound volume',
    },
    {
        label: '_GEng_Sound_Load',
        documentation: 'Loads a sound into a Sound Object',
    },
    {
        label: '_GEng_Sound_Play',
        documentation: 'Play a Sound Object',
    },
    {
        label: '_GEng_Sound_AttribSet',
        documentation: 'Adjust the attributes of a Sound Object',
    },
    {
        label: '_GEng_Sound_AttribGet',
        documentation: 'Get the attributes of a Sound Object',
    },
    {
        label: '_GEng_Sound_SetLoop',
        documentation: 'Specify if a sound object should be played in loop',
    },
    {
        label: '_GEng_Sound_IsPlaying',
        documentation: 'Get the status of a Sound Object',
    },
    {
        label: '_GEng_Sound_Pause',
        documentation: 'Pause a Sound Object',
    },
    {
        label: '_GEng_Sound_Stop',
        documentation: 'Stop a Sound Object',
    },
    {
        label: '_GEng_Sound_Free',
        documentation: 'Delete and free the resources used by a Sound Object',
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'GEng_Sound.au3'
}

module.exports = items