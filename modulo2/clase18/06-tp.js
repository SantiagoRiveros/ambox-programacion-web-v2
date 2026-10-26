const inputTarea = document.querySelector("#input-tarea");
const botonAgregar = document.querySelector("#boton-agregar");
const listaTareas = document.querySelector("#lista-tareas");

botonAgregar.addEventListener("click", function () {
  const texto = inputTarea.value; // Va a capturar el valor en el inputTarea

  if (texto.trim == "") {
    //evalua si esta vacio el input
    alert("Escribi una tarea antes de agregarla");
    return;
  }
  // creamos el list item
  const nuevaTarea = document.createElement("li");

  // Creamos un elemento separado de texto
  const textoTarea = document.createElement("span");
  textoTarea.textContent = texto + " - INCOMPLETA";

  nuevaTarea.appendChild(textoTarea);

  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Completar";

  nuevaTarea.appendChild(botonCompletar);

  // Agregamos una funcion que me complete o me deje incompleta la tarea

  botonCompletar.addEventListener("click", function () {
    if (botonCompletar.textContent == "Completar") {
      botonCompletar.textContent = "Incompletar";
      textoTarea.textContent = texto + " - COMPLETA";
    } else {
      botonCompletar.textContent = "Completar";
      textoTarea.textContent = texto + " - INCOMPLETA";
    }
  });

  // Lo asignamos como "hijo" del ul
  listaTareas.appendChild(nuevaTarea);

  // reiniciamos el contenido del input
  inputTarea.value = "";
});
