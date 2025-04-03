const TASKS_LIST = 'tasks'

function saveTask(id, description, state) {

    const TASK = {
        id: id,
        description: description,
        state: state
    };

    // Trae las tareas existentes del local storage
    let tasks = JSON.parse(localStorage.getItem(TASKS_LIST)) || [];

    // Agrega la nueva tarea a la lista de tareas
    tasks.push(TASK);

    // Guarda la lista actualizada en el local storage
    localStorage.setItem(TASKS_LIST, JSON.stringify(tasks));
}

function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem(TASKS_LIST)) || [];

    // Filtra las tareas para eliminar la tarea con el id especificado
    tasks = tasks.filter(task => task.id !== id);

    // Guarda la lista actualizada en el local storage
    localStorage.setItem(TASKS_LIST, JSON.stringify(tasks));
}

function setTaskState(id, newState){
    let tasks = JSON.parse(localStorage.getItem(TASKS_LIST))
    // Cuando encuentra una tarea con el id que busca, la modifica
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.state = newState;
        }
        return task;
    });
    localStorage.setItem(TASKS_LIST, JSON.stringify(tasks));
}
// TODO Crear una funcion donde muestre las tareas guardadas en el codigo html
// TODO Asignar las funciones de guardado, modificar estado y eliminar elemento a cada tarea