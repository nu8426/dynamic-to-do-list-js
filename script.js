document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
const taskText = taskInput.value.trim();
if (taskText === '') {
    alert('Please enter a task.');
    return;
}
const taskItem = document.createElement('li');
taskItem.textContent = taskText;
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.classList.add('remove-btn');
removeButton.onclick = () => {
    taskList.removeChild(taskItem);
};
taskItem.appendChild(removeButton); // Attach button to the task
taskList.appendChild(taskItem);     // Add the task to the list
taskInput.value = '';
