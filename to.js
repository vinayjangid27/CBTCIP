document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            if (editButton.textContent === 'Edit') {
                taskSpan.contentEditable = true;
                taskSpan.focus();
                editButton.textContent = 'Save';
            } else {
                taskSpan.contentEditable = false;
                editButton.textContent = 'Edit';
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});