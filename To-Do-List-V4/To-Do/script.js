`use strict`

let firstparentElement = document.getElementById('container-main');
let childElement = document.getElementById('undone-one');
let circleElement = document.getElementById('circle-one')
let lastparentElement = document.getElementById("container-ready")


document.addEventListener('click', function(event){
    lastparentElement.appendChild(childElement)
    childElement.classList.replace('undone','done')
    circleElement.classList.replace('circle','circle-done')
})
