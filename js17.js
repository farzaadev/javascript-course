
var tasktitle       = document.getElementById('tasktitle')
var createtaskbtn   = document.getElementById('createtaskbtn')
var tasklist        = document.getElementById('tasklist')

class Tasks{

    constructor(){
        var tasksFromCookie = this.getFromCookie()
        this.tasklist = [];
        if(typeof tasksFromCookie == "object" && tasksFromCookie  != '')
            this.tasklist = tasksFromCookie;
    }


    add(tasktitlevalue){
        this.tasklist.push(tasktitlevalue)
        this.saveInCookie()
    }

    get(){
        return this.tasklist;
    }

    saveInCookie()
    {
        var date = new Date();
        var exDate = date.setTime(date.getTime() + (30*24*60*60*1000));
        document.cookie = `tasklist=${this.tasklist};expires=${exDate};path=/`
    }

    getFromCookie()
    {
        var cookie = document.cookie;
        cookie = cookie.replace('tasklist=','').split(',')
        return cookie;
    }
}

createtaskbtn.addEventListener('click',saveTask)

var task = new Tasks()
fillTable()
function saveTask(){
    task.add(tasktitle.value)
    tasktitle.value = ''
    tasktitle.focus()
    fillTable()
}

function fillTable(){
    var taskList = task.get()
    tasklist.innerHTML = ''
    for(var taskItem of taskList)
    {
        var li = document.createElement('li')
        li.innerText = taskItem
        tasklist.appendChild(li)
    }
}


