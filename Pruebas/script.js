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
    }, 5000); // Tiempo total de carga (2 segundos)
});
