let todolist = [];

function addTask() {

    let task = document.getElementById('task').value;

    if(task==='') {
        alert ("You must write something")
    }else {
    todolist.push(task);
    }

    document.getElementById('task').value = '';

    showTask();
 
}
 
function removeTask() {
    let id = this.getAttribute('id');

    todolist.splice(id, 1);
 
    showTask();
 
}
 
function showTask() {
 
    let html = '<ul>';
    for(let i=0; i<todolist.length; i++) {
        html += '<li>' + todolist[i] + '<button class="close" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    let buttons = document.getElementsByClassName('close');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeTask);
    };

    let list = document.querySelector('ul');
    list.addEventListener('click', function(el) {
        if (el.target.tagName === 'LI') {
            el.target.classList.toggle('checked');
        }
    }, false);

}
 
document.getElementById('addBtn').addEventListener('click', addTask);
showTask();
