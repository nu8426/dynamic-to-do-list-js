document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load saved tasks from Local Storage
    function loadTasks() {
        const saved = localStorage.getItem('tasks');
        const tasks = saved ? JSON.parse(saved) : [];

        tasks.forEach(text => {
            addTask(text, false); // false = don't re-save on load
        });
    }

    // Add a task to the list (and optionally save to Local Storage)
    function addTask(taskText, saveToStorage = true) {
        if (typeof taskText !== 'string' || taskText.trim() === '') {
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

            // Remove from Local Storage
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = currentTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Save to Local Storage if needed
        if (saveToStorage) {
            const existing = JSON.parse(localStorage.getItem('tasks') || '[]');
            existing.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(existing));
        }

        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks when page opens
    loadTasks();
});
