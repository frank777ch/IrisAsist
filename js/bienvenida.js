function reproducirMensaje() {

    var mensaje = new SpeechSynthesisUtterance("¡Bienvenido a Iris Asist, como docente podrás realizar las siguientes opciones: Opción 1: Administrar alumnos. Opción 2: Administrar notas. Por favor escoja una de las dos opciones disponibles.");

    mensaje.lang = "es-E"; 
 
    window.speechSynthesis.speak(mensaje);

    // Ejecutar la síntesis de voz
    window.speechSynthesis.speak(mensaje);

    // Agregar clase "active" a la imagen para aplicar el efecto
    document.getElementById("logo").classList.add("active");

    // Remover clase "active" después de un tiempo para volver a la normalidad
    setTimeout(function() {
        document.getElementById("logo").classList.remove("active");
    }, 200); // El mismo tiempo que la transición en CSS
}