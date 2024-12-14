`use strict`


var parentElement = document.getElementById('container');
let childElementOne = document.getElementById('task-one');
let childCirkcle = document.getElementById('circle-one');


childElementOne.addEventListener('mouseover', function(){
    childCirkcle.style.backgroundColor = '#FAEBD7'
})

document.addEventListener('click', function(event){
    parentElement.append(childElementOne)
})

