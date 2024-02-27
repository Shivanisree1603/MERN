function addTask(){
    
    var task = document.getElementById('task-input').value

     //count code {

    var totalTask = document.getElementById('total-task')

    var totalCount =document.getElementById('task-list').childElementCount

    if (task.trim()!=='') //Avoid empty string in task list
    

    totalTask.textContent = totalCount + 1
    // if (task.trim()!=='') 

    
    //  }

   

    var taskItem = document.createElement('ul')

    taskItem.textContent = task

    taskItem.className ='border border-gray-200 bg-white-200 rounded-lg p-10  items-center flex justify-between shadow-md py-4 px-10 mt-3'
    
    document.getElementById('task-list').appendChild(taskItem)
    
    //To free the entered text content
    document.getElementById('task-input').value = ''

    var deleteButton=document.createElement('button')

    deleteButton.textContent='Delete'

    deleteButton.className = 'bg-red-500 text-white px-4 py-2  rounded-full'

    deleteButton.addEventListener('click', function(){

        taskItem.remove()

        var taskCount = document.getElementById('task-list').childElementCount
        
        totalTask.textContent = taskCount
    })
    
    taskItem.appendChild(deleteButton)
    //document.getElementById('task-list').appendChild(taskItem) 
    
}
//delete all tasks
function deleteTask(){

    document.getElementById('task-list').innerHTML=''//innerHTML delete all the tasks
}