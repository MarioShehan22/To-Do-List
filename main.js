const textInput1 = document.getElementById('taskInput1');
const textInput2 = document.getElementById('taskInput2');
const addTaskBtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const tasks = [];

addTaskBtn.addEventListener('click',()=>{
    const task1 = textInput1.value;
    const task2 = textInput2.value;
    if(task1 !=='' && task2 !==''){
        tasks.push({ text: task1, time: task2, completed: false });
        renderTask();
        textInput1.value = '';
        textInput2.value = '';
    }
});

const renderTask = ()=>{
    taskList.innerHTML = '';
    tasks.map((task,index)=>{
        const listItem = document.createElement('li');
        listItem.className='task';
        if(task.completed){
            listItem.classList.add('task-completed');
        }

        listItem.innerHTML =`
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="txt">${task.text}</span>
            <span class="txt">${task.time}</span>
            <button class="delete-button delete-button">Delete</button>
            <button class="update-button edit-button">Update</button>
        `;
        listItem.querySelector('input[type="checkbox"]').addEventListener('change',()=>{
            task.completed = !task.completed;
            renderTask();
        });
        listItem.querySelector('.delete-button').addEventListener('click',()=>{
            tasks.splice(index, 1);
            renderTask();
        });
        listItem.querySelector('.update-button').addEventListener('click',()=>{
            const newTask = prompt('Edit Task:',task.text);
            const newTime = prompt('Edit time:',task.text);
            if(newTask!==null &&newTime!==null){
                task.text= newTask;
                task.time= newTime;
                renderTask();
            }
        });
        taskList.append(listItem);
    });
}
