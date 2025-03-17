let tareas = [];


function añadirTarea(tarea) {
  tareas.push(tarea);
  console.log(`Tarea "${tarea}" añadida a la lista.`);
}


function mostrarTareas() {
  console.log("Lista de tareas:");
  tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. ${tarea}`);
  });
}


function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    let tareaEliminada = tareas.splice(indice, 1);
    console.log(`Tarea "${tareaEliminada}" eliminada.`);
  } else {
    console.log("Índice inválido.");
  }
}


añadirTarea("Aprender JavaScript");
añadirTarea("Leer un libro");
mostrarTareas();
eliminarTarea(0);
mostrarTareas();
