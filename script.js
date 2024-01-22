    // Obtener el contexto del canvas
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');

    // Dibujar una imagen de ejemplo en el canvas
    var imagenEjemplo = new Image();
    imagenEjemplo.src = 'ruta/a/tu/imagen.jpg'; // Reemplaza con la ruta de tu propia imagen
    imagenEjemplo.onload = function() {
      contexto.drawImage(imagenEjemplo, 0, 0, canvas.width, canvas.height);
    };

    // Función para descargar la imagen
    function descargarImagen() {
      var enlaceDescarga = document.createElement('a');
      enlaceDescarga.href = canvas.toDataURL('image/png'); // Convertir canvas a una URL de datos en formato PNG
      enlaceDescarga.download = 'mi_imagen.png'; // Nombre del archivo a descargar
      enlaceDescarga.click();
    }