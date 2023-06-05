function convertirMayHastaPto(cadena) {
    // Muestra la cadena original por consola
    console.log("Antes:", cadena);
  
    let resultado = "";
    let ptoEncontrado = false;
  
    // Recorre cada caracter de la cadena
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
  
      // Comprueba si se encuentra un punto
      if (caracter === ".") {
        ptoEncontrado = true;     
    }
  
      // Convierte los caracteres a mayúsculas si no se ha encontrado un punto
      if (!ptoEncontrado) {
        resultado += caracter.toUpperCase();
      } else {
        resultado += caracter;
      }
    }
  
    // Muestra la cadena modificada por consola
    console.log("Después:", resultado);
  }
  
  // Llama a la función
  const miCadena = "www.techacademy.com";
  convertirMayHastaPto(miCadena);
  