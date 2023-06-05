function calcularMultiplos() {
    //Almacena el número pedido al usuario  
    let numDado = parseInt(prompt("Ingresa un número entero del 1 al 10:"));
  
    // Valida que se haya ingresado un número entero del 1 al 10
    while (isNaN(numDado) || numDado < 1 || numDado > 10) {
      numDado = parseInt(prompt("Ingresa un número entero válido del 1 al 10:"));
    }
  
    // Itera del 1 al 100
    for (let i = 1; i <= 100; i++) {
      // Comprueba si el número es múltiplo del número dado
      if (i % numDado == 0) {
        // Muestra la secuencia de múltiplos por consola
        console.log(i);
      }
    }
  }
  //Llama a la función
  calcularMultiplos();
