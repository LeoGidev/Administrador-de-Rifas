    
        var canvas = document.getElementById('miCanvas');
        var contexto = canvas.getContext('2d');
    
        // Tamaño de cada cuadro en centímetros
        var tamanoCuadro = 200; // 2 cm
        var cuadrosPorLado = 10;
        var tamañoTotal = tamanoCuadro * cuadrosPorLado;
                 // Dibujar el rectángulo 
    contexto.fillStyle = 'white';
    contexto.fillRect(0, 0, canvas.width,(canvas.height));
    
        // Dibujar la cuadrícula
        for (var i = 0; i < cuadrosPorLado; i++) {
          for (var j = 0; j < cuadrosPorLado; j++) {
            // Calcular las coordenadas en píxeles para cada cuadro
            var x = i * tamanoCuadro * (canvas.width / tamañoTotal);
            var y = j * tamanoCuadro * ((canvas.height - 300) / tamañoTotal);
    
            // Dibujar el cuadro en el canvas
            contexto.lineWidth = 5; // Grosor de línea en píxeles

            // Establecer el color de línea
            contexto.strokeStyle = 'green';
            contexto.strokeRect(x, y+300, (canvas.width)/10, (canvas.height-300)/10);
          }
        }




    // Dibujar una imagen de ejemplo en el canvas
    var imagenEjemplo = new Image();
    imagenEjemplo.src = 'downloads/imagen.jpg'; // 
    imagenEjemplo.onload = function() {
    contexto.drawImage(imagenEjemplo, 0, 0, canvas.width, canvas.height);
    };

    // Función para descargar la imagen
    function descargarImagen() {
      var enlaceDescarga = document.createElement('a');
      enlaceDescarga.href = canvas.toDataURL('downloads/image/png'); // Convertir canvas a una URL de datos en formato PNG
      enlaceDescarga.download = 'Rifa.png'; // Nombre del archivo a descargar
      enlaceDescarga.click();
    }