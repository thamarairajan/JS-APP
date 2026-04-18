const taskInput = document.getElementById("text-input");
const tasList = document.getElementById("task-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask () {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({id: Date.now(), text});
    taskInput.value = "";
    render ();
} 
function render () {
    tasList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "list-style";
        li.innerHTML = `
        <span class="text">${task.text}</span>
        <button class="edit-btn" data-id="${task.id}" >Edit</button>
        <button class="delete-btn"data-id="${task.id}" >Delete</button>
        `;
        tasList.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
tasList.addEventListener("click", (e) => {
    const id = Number (e.target.dataset.id);
    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(t => t.id !== id);
        render();
    }
    if (e.target.classList.contains("edit-btn")) {
        const editTarget = tasks.find(t => t.id === id);
        if (editTarget) {
            const newtask = prompt("Enter New Task", editTarget.text);
            editTarget.text = newtask;
            render ();
        }
    }
});

render ();
