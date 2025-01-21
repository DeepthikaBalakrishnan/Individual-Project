// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('todo-input');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTaskCompletion(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    
    // Add the new task to the list
    document.getElementById('todo-list').appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Function to toggle task completion
function toggleTaskCompletion(span) {
    let li = span.parentElement;
    li.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}
