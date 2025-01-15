`use strict`
const undoneTasksContainer = document.getElementById('container-main') // Родитель новых задач
const doneTasksContainer = document.getElementById('container-ready') // Родитель готовых задач
let taskElements = document.getElementsByClassName('task') // Задачи
let circle = document.getElementsByClassName('mark') // Маркеры выполнения 


for (i = 0; i < taskElements.length; i++){
    let task = taskElements[i]
    task.addEventListener('click', function(event){
        if (task.parentElement.className === undoneTasksContainer.className){
            doneTasksContainer.appendChild(task)
            task.classList.replace('undone','done')
            task.firstChild.classList.replace('circle-undone', 'circle-done')
        } else {
            undoneTasksContainer.appendChild(task)
            task.classList.replace('done','undone')
            task.firstChild.classList.replace('circle-done', 'circle-undone')
        }
    })
}


