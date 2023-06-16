// Obtener referencia al contenedor del slider
const sliderContainer = document.querySelector('.slider');

// Obtener referencias a cada slide
const slides = Array.from(document.querySelectorAll('.slide'));

// Variables para controlar el estado del slider
let currentIndex = 0;
let interval;

// Función para mostrar un slide específico
function showSlide(index) {
  // Ocultar todos los slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Mostrar el slide seleccionado
  slides[index].style.display = 'block';
}

// Función para pasar al siguiente slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Función para iniciar el slider
function startSlider() {
  interval = setInterval(nextSlide, 1000); // Cambiar slide cada 3 segundos
}

// Función para detener el slider
function stopSlider() {
  clearInterval(interval);
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Iniciar el slider
startSlider();


// Obtener referencia al formulario
const form = document.querySelector('form');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const personas = document.getElementById('personas').value;
  const comentarios = document.getElementById('comentarios').value;

  // Hacer algo con los datos capturados
  console.log('Nombre:', nombre);
  console.log('Correo electrónico:', correo);
  console.log('Teléfono:', telefono);
  console.log('Fecha:', fecha);
  console.log('Hora:', hora);
  console.log('Número de personas:', personas);
  console.log('Comentarios adicionales:', comentarios);

  // Mostrar una alerta al usuario
  alert('¡Reserva realizada con éxito! Gracias por elegir nuestro restaurante.');

  // Reiniciar el formulario
  form.reset();
});

