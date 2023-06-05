function generarNumRandom() {

      //Repite 5 veces
    for (let i = 0; i < 5; i++) {

      // Genera un número entero aleatorio entre 0 y 100
      let numero = Math.floor(Math.random() * 100);
      
      // Verifica si el número es par o impar
      let esPar = numero % 2 == 0;
      
      // Muestra el resultado
      console.log(numero +  " el número es " + (esPar ? "par" : "impar"));
    }
  }
  
  //Llama a la función
  generarNumRandom();