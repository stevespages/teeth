// Note that rect, and presumably other shapes, are not ...
// ...clickable if their fill value is none.

const svgDiv = document.querySelector('#svg-div');
const toothMenuDiv = document.querySelector('#tooth-menu-div');

// Initially, hide toothMenuDiv
toothMenuDiv.setAttribute('style', 'display:none');

// Enable user to close toothMenuDiv and re show svgDiv
const toothMenuCloseBtn = document.querySelector('#tooth-menu-close-btn');
toothMenuCloseBtn.addEventListener('click', function(){
    svgDiv.setAttribute('style', 'display:block');
    toothMenuDiv.setAttribute('style', 'display:none');
})

function showToothMenu(fdiN){
    svgDiv.setAttribute('style', 'display:none');
    toothMenuDiv.setAttribute('style', 'display:block');
}

// SVG id   | FDI
// rect5233 | 31
// rect5299 | 32
// path5235 | 33

const fdi31 = document.querySelector('#rect5233');
const fdi32 = document.querySelector('#rect5229');
const fdi33 = document.querySelector('#path5235');

fdi31.addEventListener('click', function(){
    showToothMenu('fdi31');
});

fdi32.addEventListener('click', function(){
    showToothMenu('fdi32');
});

fdi33.addEventListener('click', function(){
    showToothMenu('fdi33');
});
