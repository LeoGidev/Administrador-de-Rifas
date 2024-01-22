var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');

// Tamaño de cada cuadro 
var tamanoCuadro = 200;
var cuadrosPorLado = 10;
var tamañoTotal = tamanoCuadro * cuadrosPorLado;
var portada = 200;

// Inicializar colores
var colorFondo = '#ffffff';
var colorLineas = '#00ff00';
var colorNumeros = '#000000';
//otras variables
var titulo = 'Título';
var descripcion = 'Descripción';
var valor='Valor=';
var imagen = new Image();
imagen.src = 'rifa.png';


function cambiarColorFondo() {
  colorFondo = document.getElementById('colorFondo').value;
  dibujarCuadricula();
}

function cambiarColorLineas() {
  colorLineas = document.getElementById('colorLineas').value;
  dibujarCuadricula();
}

function cambiarColorNumeros() {
  colorNumeros = document.getElementById('colorNumeros').value;
  dibujarCuadricula();
}
function formatearNumero(numero) {
    return numero < 10 ? '0' + numero : numero.toString();
      }

function cambiarTitulo() {
        titulo = document.getElementById('titulo').value;
        dibujarCuadricula();
      }
      
function cambiarDescripcion() {
        descripcion = document.getElementById('descripcion').value;
        dibujarCuadricula();
      }

function cambiarValor() {
        valor = 'valor= '+ document.getElementById('valor').value;
        dibujarCuadricula();
      }
imagen.onload = function() {

    contexto.drawImage(imagen, 0, 0, portada-4, (portada-4));
}

// Dibujar cuadrícula con colores iniciales
dibujarCuadricula();

function dibujarCuadricula() {
            // Elimina la imagen de fondo existente si hay una
            contexto.clearRect(0, 0, portada-4, portada-4);
  // Dibujar el rectángulo de fondo
  contexto.fillStyle = colorFondo;
  contexto.fillRect(0, 0, canvas.width, canvas.height);

  // Dibujar la cuadrícula y los números
  for (var i = 0; i < cuadrosPorLado; i++) {
    for (var j = 0; j < cuadrosPorLado; j++) {
      var x = i * tamanoCuadro * (canvas.width / tamañoTotal);
      var y = j * tamanoCuadro * ((canvas.height - portada) / tamañoTotal);

      // Dibujar el cuadro en el canvas con el nuevo color de líneas
      contexto.lineWidth = 5;
      contexto.strokeStyle = colorLineas;
      contexto.strokeRect(x, y + portada, (canvas.width) / 10, (canvas.height - portada) / 10);

      // Dibujar el número en el centro del cuadro con el nuevo color de números
      contexto.fillStyle = colorNumeros;
      contexto.font = '20px Arial'; 
      contexto.textAlign = 'center';
      contexto.textBaseline = 'middle';
      var numero = i * cuadrosPorLado + j;
      var numeroFormateado = formatearNumero(numero);
     
      contexto.fillText(numeroFormateado, x + (canvas.width) / (cuadrosPorLado * 2), y + portada + (canvas.height - portada) / (cuadrosPorLado * 2));

    }
  }
  // Dibujar el título en la posición especificada
  contexto.fillStyle = colorNumeros; 
  contexto.font = '40px Arial';
  contexto.textAlign = 'center';
  contexto.textBaseline = 'top';
  contexto.fillText(titulo, (canvas.width) - portada, 40);

  // Dibujar la descripción en la posición especificada
  contexto.fillStyle = colorNumeros; 
  contexto.font = '20px Arial'; 
  contexto.textAlign = 'center';
  contexto.textBaseline = 'top';
  contexto.fillText(descripcion, canvas.width / 2, 150);

  // Dibujar el valor
  contexto.fillStyle = colorNumeros; 
  contexto.font = '20px Arial'; 
  contexto.textAlign = 'center';
  contexto.textBaseline = 'top';
  contexto.fillText(valor, 500, portada-40);

  cargarImagenDeFondo()
}

// Dibujar una imagen de ejemplo en el canvas
var imagenEjemplo = new Image();
imagenEjemplo.src = 'imagen.jpg';
imagenEjemplo.onload = function () {
contexto.drawImage(imagenEjemplo, 0, 0, canvas.width, canvas.height);
};

// Función para descargar la imagen
function descargarImagen() {
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = canvas.toDataURL('image/png');
  enlaceDescarga.download = 'image.png';
  enlaceDescarga.click();
}

function cargarImagenDeFondo() {
    var input = document.getElementById('imagenFondoInput');
    var archivo = input.files[0];
    
  
    if (archivo) {
        

      // Código para cargar la imagen de fondo y dibujarla en el canvas
      var imagenFondo = new Image();
      imagenFondo.onload = function() {
        // Dibuja la imagen en el canvas:
        contexto.drawImage(imagenFondo, 0, 0, portada-4, (portada-4));
      };
      imagenFondo.src = URL.createObjectURL(archivo);
    }
    
  }
  

