function invertirArreglo(arreglo) {
    // Muestra el arreglo original en la consola
    console.log("Arreglo original:", arreglo);
  
    // Invierte el arreglo utilizando el método reverse()
    const arregloInvertido = arreglo.reverse();
  
    // Mostrar el arreglo invertido en la consola
    console.log("Arreglo invertido:", arregloInvertido);
  }
  
  // Ejemplo de uso
  const miArreglo = [23, 5, 34, 56, 98, "cadena", 7];
  
  //Llamada a la función
  invertirArreglo(miArreglo);