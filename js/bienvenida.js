function reproducirMensaje() {

    var mensaje = new SpeechSynthesisUtterance("¡Bienvenido a Iris Asist, como docente podrás realizar las siguientes opciones: Opción 1: Administrar alumnos. Opción 2: Administrar notas. Por favor escoja una de las dos opciones disponibles.");

    mensaje.lang = "es-E"; 
 
    window.speechSynthesis.speak(mensaje);
}