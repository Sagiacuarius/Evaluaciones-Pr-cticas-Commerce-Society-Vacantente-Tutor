function contarCaracterRepetido(cadena, caracter) {
    // Convierte ambas a minúsculas para ignorar diferencias de mayúsculas y minúsculas
    cadena = cadena.toLowerCase();
    caracter = caracter.toLowerCase();
  
    let contador = 0;
  
    // Itera sobre cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
      // Si el carácter actual coincide con el carácter dado, se incrementa el contador
      if (cadena.charAt(i) === caracter) {
        contador++;
      }
    }
  
    // Muestra el resultado por consola
    console.log(`El carácter "${caracter}" se repite ${contador} veces en "${cadena}"`);
  }
  
  // Llama a la función
  contarCaracterRepetido("hola como estas", "o");
  
  