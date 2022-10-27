
let filterdTasks = [];

function filterTasks() {
    let search = document.getElementById('boardInput').value;
    search = search.toLowerCase();

    if(search.length == 0)
        filterdTasks = boardTasks;
    else
        filterdTasks = boardTasks.filter( t => t.title.toLowerCase().startsWith(search) );

        renderFilteredTodos();   
}

function renderFilteredTodos() {
    let todo = filterdTasks.filter(t => t['category'] == 'todo');
    let progress = filterdTasks.filter(t => t['category'] == 'progress');
    let testing = filterdTasks.filter(t => t['category'] == 'testing');
    let done = filterdTasks.filter(t => t['category'] == 'done');


    resetBoard();
    renderBoard(todo, progress, testing, done);


}



function renderTodos() {
    let todo = boardTasks.filter(t => t['category'] == 'todo');
    let progress = boardTasks.filter(t => t['category'] == 'progress');
    let testing = boardTasks.filter(t => t['category'] == 'testing');
    let done = boardTasks.filter(t => t['category'] == 'done');


    resetBoard();
    renderBoard(todo, progress, testing, done);


}

function resetBoard() {
    document.getElementById('todo').innerHTML = '';
    document.getElementById('inProgress').innerHTML = '';
    document.getElementById('testing').innerHTML = '';
    document.getElementById('done').innerHTML = '';
}

function renderBoard(todo, progress, testing, done) {
    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('todo').innerHTML += generateTaskHTML(element);

    }
    for (let i = 0; i < progress.length; i++) {
        const element = progress[i];
        document.getElementById('inProgress').innerHTML += generateTaskHTML(element);

    }
    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += generateTaskHTML(element);

    }
    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += generateTaskHTML(element);

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