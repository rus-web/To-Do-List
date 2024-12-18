`use strict`
const firstParentElement = document.getElementById('container-main') // Родитель новых задач
const lastParentElement = document.getElementById('container-ready') // Родитель готовых задач


const childElement = document.getElementById("undone-one")
let childElementClass = document.getElementById("undone-one").parentElement.className
// console.log(childElement[0])



childElement.addEventListener("click", function(event){
if(childElementClass === "container-main"){
    lastParentElement.appendChild(childElement) 
    console.log(childElement.parentElement.className)
} else {
    firstParentElement.appendChild(childElement)
}})

