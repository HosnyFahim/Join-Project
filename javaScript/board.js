
let filterdTasks = [];
// let boardTasks = [];

function filterTasks() {
    let search = document.getElementById('boardInput').value;
    search = search.toLowerCase();

    if(search.length == 0)
        filterdTasks = boardTasks;
    else
        filterdTasks = boardTasks.filter( t => t.title.toLowerCase().startsWith(search) );

        renderTodos(filterdTasks);   
}

function renderTodos(tasks) {
    document.getElementById('todo').innerHTML = '';
    document.getElementById('inProgress').innerHTML = '';
    document.getElementById('testing').innerHTML = '';
    document.getElementById('done').innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById(tasks[i]['category']).innerHTML += generateTaskHTML(tasks[i]);
    }
}


function generateTaskHTML(element) {

    return `<div class="boardTask">
    <div class="categoryTag tag${element['categoryTag']}"> ${element['categoryTag']} </div>
    <div>
        <h3>${element['title']}</h3>
        <span class="taskDesc">${element['taskDesc']}</span>
    </div>
    <div class="progressContainer">
        <div class="progressBar">
            <div class="progressLine" style="width: ${element['progress']}">

            </div>
        </div>
        <p>1/3 Done</p>
    </div>
    <div class="user_urgency">
        <div class="assignedTo">
            <div class="assignedUser">
                HF
            </div>
            <div class="assignedUser">
                YM
            </div>
            <div class="assignedUser">
                GB
            </div>
        </div>
        <div class="urgency">
            <img src="img/prio_${element['urgency']}.svg" alt=""> 
        </div>
    </div>`
}


// Close popups

function closeBoardTaskInfo() {
    let closeTaskInfo = document.getElementById('boardTaskInfo');
    let boardAddTask = document.getElementById('boardAddTask');
    closeTaskInfo.classList.add('d-none');
    boardAddTask.classList.add('d-none');
}
function showBoardAddTask() {
    let boardAddTask = document.getElementById('boardAddTask');
    boardAddTask.classList.remove('d-none')
}

