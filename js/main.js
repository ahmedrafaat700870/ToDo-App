let toDoContainer = document.querySelector('.todo-container') ;
let addTaskIput = document.querySelector('.add-task input') ;
let addTaskPlus = document.querySelector('.add-task .plus') ;
let taskStaf = document.querySelector('.tasks-staf') ;
let compeleted = document.querySelector('.task-count p span ') ;
let tasksCount = document.querySelector('.tasks-completed p span ') ;
window.onload = function () {
    addTaskIput.focus() ;
};
addTaskPlus.onclick = function() {
    if (addTaskIput.value === '') {
        console.log('no value') ;
    } else {
        let noTask = document.querySelector('.tasks-staf .no-tasks-massge') ;
        if (document.body.contains(document.querySelector('.tasks-staf .no-tasks-massge'))) {
            // trmove no tasks massenge .
            noTask.remove() ;
        }
        // create main span . 
        let mainSpan = document.createElement('span') ;
        // create delete span . 
        let deletspan = document.createElement('span') ;
        // add class (tasks) to main span .
        mainSpan.className = 'tasks' ;
        // add class (delete) to delete span .
        deletspan.className = 'delete' ;
        // add text to main span . 
        mainSpan.appendChild(document.createTextNode(addTaskIput.value)) ;
        // add text to delete span . 
        deletspan.appendChild(document.createTextNode('delete')) ;
        //add delete span to mainspna .
        mainSpan.appendChild(deletspan) ;
        // main Span to task staf div .
        taskStaf.appendChild(mainSpan) ;
        // update value 
        addTaskIput.value = '' ;
        // add focus to addTaskIput
        addTaskIput.focus() ;
        // clacoulate tasks and finshed tasks .
        clacolateTaskscount () ;
    }
};
document.addEventListener('click' , function(e) {
    if(e.target.className == 'delete') {
        e.target.parentNode.remove() ;
        clacolateTaskscount () ;
        if (taskStaf.childElementCount == 0) {
            onTasksMassge () ;
        }
    } 
    if (e.target.classList.contains('tasks')) {
        e.target.classList.toggle("finshed") ;
        clacolateTaskscount () ;
    }
});
// function show massenge no tasks . 
function onTasksMassge () {
    let mainMsg= document.createElement('span') ;
    let textMsg = document.createTextNode('No Tasks To Show') ;
    mainMsg.appendChild(textMsg) ;
    mainMsg.className = 'no-tasks-massge' ;
    taskStaf.appendChild(mainMsg) ;
}
function clacolateTaskscount () {
    // compeleted.innerHTML = document.querySelectorAll('.tasks-staf').classList.contains('finshed').length ;
    tasksCount.innerHTML =  document.querySelectorAll('.tasks-staf .tasks').length ;
    compeleted.innerHTML =  document.querySelectorAll('.tasks-staf .finshed').length ;
}
