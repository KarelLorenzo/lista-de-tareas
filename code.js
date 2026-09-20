const form = document.getElementById('task-form');
const taskInput = document.getElementById('tarea');
const taskList = document.getElementById('lista');

const tareas =[];

form.addEventListener('submit', function(event){
    event.preventDefault();// Evita que el formulario se envíe y recargue la página
    tareas.push({ id:Date.now(), tarea: taskInput.value, completada: false });
    renderTasks();

    taskInput.value = '';
});

function renderTasks() {
    taskList.innerHTML = '';
    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        li.textContent = tarea.tarea;
        li.dataset.id = tarea.id;
        taskList.appendChild(li);
    });
}

taskList.addEventListener('click', function(event){
    console.log(event.target);
})