// This is for adding an event listener to.
// It contains all the radio buttons for displaying notation
const notationRadioDiv = document.querySelector('#notation-radio-div');

// Get the g elements from the SVG that correspond to layers
const layerUniversal = document.querySelector('#layer-universal');
const layerFdi = document.querySelector('#layer-fdi');
const layerToothnames = document.querySelector('#layer-toothnames');
const layerPalmer = document.querySelector('#layer-palmer');

// This is related to notation but differently to the other layers
// This is not currently in use by the app
// It could be used to show and a visual indication of which...
// ...teeth are primary and which secondary
const layerPermPrim = document.querySelector('#layer-perm-prim');

// Get the radio elements from the HTML
const radioToothnames = document.querySelector('#radio-toothnames');
const radioFdi = document.querySelector('#radio-fdi');
const radioUniversal = document.querySelector('#radio-universal');
const radioPalmer = document.querySelector('#radio-palmer');
const radioInputs = [radioToothnames, radioFdi, radioUniversal, radioPalmer];

// Set style attr to display:none for all notations...
// ... except FDI as that is checked in the HTML radio
layerUniversal.setAttribute('style', 'display:none');
layerToothnames.setAttribute('style', 'display:none');
layerPalmer.setAttribute('style', 'display:none');
layerPermPrim.setAttribute('style', 'display:none');

notationRadioDiv.addEventListener('click', function(){
    let checkedRadioValue;
    for(let i = 0; i < radioInputs.length; i++){
        if(radioInputs[i].checked){
            console.log(radioInputs[i])
            checkedRadioValue = radioInputs[i].value;
        }
    }
    // Hide all the notation layers
    layerUniversal.setAttribute('style', 'display:none');
    layerFdi.setAttribute('style', 'display:none');
    layerToothnames.setAttribute('style', 'display:none');
    layerPalmer.setAttribute('style', 'display:none');

    // Now show the layer corresponding to the checked radio el
    if(checkedRadioValue === 'universal'){
        layerUniversal.setAttribute('style', 'display:inline');
    }
    if(checkedRadioValue === 'fdi'){
        layerFdi.setAttribute('style', 'display:inline');
    }
    if(checkedRadioValue === 'toothnames'){
        layerToothnames.setAttribute('style', 'display:inline');
    }
    if(checkedRadioValue === 'palmer'){
        layerPalmer.setAttribute('style', 'display:inline');
    }
})
