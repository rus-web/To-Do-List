`use strict`
const undoneTasksContainer = document.getElementById('container-main') // Родитель новых задач
const doneTasksContainer = document.getElementById('container-ready') // Родитель готовых задач
let taskElements = document.getElementsByClassName('task') // Задачи
let circle = document.getElementsByClassName('mark') // Маркеры выполнения 

const connection = new WebSocket("ws://localhost:9000");

connection.onopen = (event) => {  
    console.log("Connection opened");
    connection.send("Hello Server");
};
// если возникла ошибка
connection.onerror = (error) => {
    console.log(`WebSocket Error: ${error}`);
};
// если соединение закрыто
connection.onclose = (event) => {
    console.log("Connection closed");
};


for (i = 0; i < taskElements.length; i++){
    let task = taskElements[i]
    task.addEventListener('click', function(event){
        if (task.parentElement.className === undoneTasksContainer.className){
            doneTasksContainer.appendChild(task)
            task.classList.replace('undone','done')
            task.firstChild.classList.replace('circle-undone', 'circle-done')
            connection.send(`${task.textContent} is ${task.classList}`)
        } else {
            undoneTasksContainer.appendChild(task)
            task.classList.replace('done','undone')
            task.firstChild.classList.replace('circle-done', 'circle-undone')
            connection.send(`${task.textContent} is ${task.classList}`)
        }
    })
}

// получаем ответ сервера
connection.onmessage = (event) =>{ 
    console.log("Server response:", event.data);
};




