// Script para manejar la funcionalidad de la aplicación

const tareaForm = document.getElementById('tarea-form');
const listaTareas = document.getElementById('lista-tareas');

// Arreglo para almacenar las tareas creadas
let tareas = [];

// Evento para manejar el envío del formulario de crear tarea
tareaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
    const prioridad = document.getElementById('prioridad').value;
    const categoria = document.getElementById('categoria').value;

    // Crear una nueva tarea y agregarla al arreglo
    const nuevaTarea = {
        titulo: titulo,
        fechaVencimiento: fechaVencimiento,
        prioridad: prioridad,
        categoria: categoria
    };

    tareas.push(nuevaTarea);

    // Limpiar el formulario
    tareaForm.reset();

    // Actualizar la lista de tareas
    actualizarListaTareas();
});

// Función para actualizar la lista de tareas en el DOM
function actualizarListaTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const tareaDiv = document.createElement('div');
        tareaDiv.innerHTML = `
            <h3>${tarea.titulo}</h3>
            <p>Fecha de Vencimiento: ${tarea.fechaVencimiento}</p>
            <p>Prioridad: ${tarea.prioridad}</p>
            <p>Categoría: ${tarea.categoria}</p>
        `;
        listaTareas.appendChild(tareaDiv);
    });
}
