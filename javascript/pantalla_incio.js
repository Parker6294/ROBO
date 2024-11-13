document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.classList.add('fade-out'); // Agregar clase de desvanecimiento

      setTimeout(() => {
          loadingScreen.style.display = 'none'; // Ocultar después del desvanecimiento
          
          const mainContent = document.getElementById('main-content');
          mainContent.style.display = 'block'; // Mostrar el contenido
          mainContent.style.opacity = '1'; // Aseguramos que sea visible
      }, 500); // Tiempo del efecto de desvanecimiento
  }, 2000); // Tiempo total de carga (2 segundos)
});



// Función para mostrar la información del aliado correspondiente
function mostrarInformacion(aliado) {
  const imagenAliado = document.getElementById("imagen-aliado");
  const textoAliado = document.getElementById("texto-aliado");
  const linkAliado = document.getElementById("link-aliado");
  const informacionDiv = document.getElementById("informacion-aliado");

  // Información de cada aliado
  switch (aliado) {
    case "aliadoA":
      imagenAliado.src =
        "https://facasap.com/wp-content/uploads/2022/11/atlanta-scaled-e1669544705340-1024x642.jpg";
      textoAliado.innerText =
        "Es una empresa creada en 2004 detrás del impulso emprendedor de Angelo Forni. Especializados en el diseño y producción de máquinas automáticas y semiautomáticas para envolverlos paletscon film estirable, máquinas automáticas para la aplicación de flejes a palets y máquinas de sobremesa para la dispensación de papel engomado.";
      linkAliado.href = "https://www.atlantastretch.com/es/";
      break;
    case "aliadoB":
      imagenAliado.src = "https://i.ytimg.com/vi/nfKjoWL_DlI/maxresdefault.jpg";
      textoAliado.innerText =
        "Comarme se dedica a la producción y comercialización de maquinaria de embalaje de final de línea, incluyendo precintadoras decajas, formadoras de cajas y envolvedoras de palets, para diversos sectores.Fundada a principios de 1900, la empresa ha centrado su actividad desde los años 60 en el diseño y construcción de máquinas de sellado de cajas de cartón, siendo pionera en el concepto moderno de máquina de encintar";
      linkAliado.href = "https://comarmesrl.com/en/company/";
      break;
    case "aliadoC":
      imagenAliado.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROPDHABtp8i7cqU-DlACQQY2OYScRMv0yNA&s";
      textoAliado.innerText =
        "Con sede en el norte de Italia, Officina Bocedi srl, es fabricante de sistemas de embalaje de final de línea de gran confiabilidad. Su gama completa de productos incluye máquinas de enfundado en frío stretch hood y retráctil, líneas de transporte, flejadoras verticales y horizontales, máquinas para embolsado al interior de cajas y una gran variedad de accesorios que pueden adaptarse al ciclo de embalaje más exigente.";
      linkAliado.href = "https://www.bocedisrl.com/es/";
      break;
    default:
      imagenAliado.src = "";
      textoAliado.innerText = "";
      linkAliado.href = "#";
      break;
  }

  // Mostrar la información del aliado
  informacionDiv.style.display = "block";
}

// Mostrar la información del primer aliado (por defecto) al cargar la página
window.onload = function() {
  mostrarInformacion("aliadoA"); // Puedes cambiar "aliadoA" a otro valor si deseas que otro aliado sea el predeterminado
};


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos


// Función para abrir el modal y cargar la imagen en él
function openModal(imageSrc, captionText) {
  var modal = document.getElementById("imageModal");    // Obtener el modal
  var modalImg = document.getElementById("modalImage");  // Obtener la imagen dentro del modal
  var caption = document.getElementById("caption");     // Obtener el texto de la descripción
  
  modal.style.display = "flex"; // Mostrar el modal
  
  // Asignar la fuente de la imagen clickeada al modal
  modalImg.src = imageSrc;
  
  // Asignar el texto de la descripción
  caption.innerHTML = captionText;
}

// Función para cerrar el modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Ocultar el modal
}

// Cierra el modal si el usuario hace clic fuera de la imagen
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Función que inicializa y gestiona el slider para cada tarjeta
function initializeSlider(sliderId) {
  const images = document.querySelectorAll(`#${sliderId} .slider-image`);
  let currentIndex = 0;

  // Función para cambiar a la siguiente imagen
  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Cicla entre las imágenes
    images[currentIndex].classList.add('active');
  }

  // Inicia el slider para el contenedor dado
  setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
  images[currentIndex].classList.add('active'); // Muestra la primera imagen
}

// Inicializa los sliders para todas las tarjetas
document.addEventListener("DOMContentLoaded", function() {
  initializeSlider("slider-cinta-bopp");
  initializeSlider("slider-cinta-multicolor");
  initializeSlider("slider-cinta-biodegradable");
  initializeSlider("slider-cinta-gorila");
});
