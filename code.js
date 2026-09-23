const form = document.getElementById('task-form');
const taskInput = document.getElementById('tarea');
const taskList = document.getElementById('lista');

let tareas = [];

form.addEventListener('submit', function(event){
    event.preventDefault();// Evita que se recargue la página
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
        if(tarea.completada) {
            li.classList.add('completada');
        }
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.classList.add('btn-eliminar');
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

taskList.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON') {
        const id = event.target.parentElement.dataset.id;
        tareas = tareas.filter(function(t){
            return t.id !== Number(id);
        })
    }
    else{
        const encontrado = tareas.find(function(t){
            return t.id === Number(event.target.dataset.id);
        })

        encontrado.completada = !encontrado.completada;
    }
    renderTasks();
})