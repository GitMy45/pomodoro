
// Para agregar el reloj :D

function actualizarReloj() {
  const timer = document.getElementById('timer');   //timer es donde dice donde se pone el reloj :) (es el id)
  if (!timer) return;

  const ahora = new Date();

  // Convertir a hora local de Ciudad de México (UTC-6 o UTC-5 con horario de verano)
  const opciones = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Mexico_City'
  };

  const horaFormateada = ahora.toLocaleTimeString('es-MX', opciones);
  timer.textContent = horaFormateada;
}

// Llamar inmediatamente y luego cada minuto
actualizarReloj();
setInterval(actualizarReloj, 1000 * 60); // cada minuto




// Para agregar nueva tarea y Placeholder

// JavaScript - Funcionalidad del placeholder (creo que carga todas las variables)
const listaTareas = document.getElementById('lista-tareas');
const inputTarea = document.querySelector('.nueva-tarea input');
const btnAgregar = document.querySelector('.nueva-tarea button');

// Función para actualizar el placeholder
const actualizarPlaceholder = () => {
  const tareas = listaTareas.querySelectorAll("li:not(.placeholder-tarea)");
  const placeholder = document.getElementById("placeholder-tareas");
  
  if (placeholder) {
    placeholder.style.display = tareas.length === 0 ? "block" : "none";
  }
};

// Función para manejar checkboxes (agrégala si no la tienes) - Para la lista de tareas
const manejarCheckbox = (checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const span = e.target.nextElementSibling;
    if (e.target.checked) {
      span.style.textDecoration = 'line-through';
      span.style.opacity = '0.6';
    } else {
      span.style.textDecoration = 'none';
      span.style.opacity = '1';
    }
  });
};

// Función para manejar el botón de eliminar - btn elminar
const manejarEliminar = (btnEliminar) => {
  btnEliminar.addEventListener('click', (e) => {
    const tarea = e.target.closest('li');
    tarea.remove();
    actualizarPlaceholder(); // Actualiza el placeholder después de eliminar
  });
};

// Event listener para agregar tareas - btn eliminar
btnAgregar.addEventListener('click', () => {
  const texto = inputTarea.value.trim();
  if (texto) {
    const nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = `
      <input type="checkbox">
      <span>${texto}</span>
      <button class="btn-eliminar">×</button>
    `;
    listaTareas.appendChild(nuevoLi);
    manejarCheckbox(nuevoLi.querySelector('input'));
    manejarEliminar(nuevoLi.querySelector('.btn-eliminar'));
    inputTarea.value = '';
    actualizarPlaceholder(); // Actualiza el placeholder después de agregar
  }
});

// Event listener para Enter en el input - Osea si le das enter se agrega la tarea igual que picarle al boton
inputTarea.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnAgregar.click();
  }
});

// Llamar la función al cargar la página
actualizarPlaceholder();
