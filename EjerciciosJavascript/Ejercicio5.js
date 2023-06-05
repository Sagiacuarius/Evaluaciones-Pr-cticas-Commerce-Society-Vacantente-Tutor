class Persona {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  
    getDetalles() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Apellido: ${this.apellido}`);
      console.log(`Edad: ${this.edad}`);
    }
  }

  //Herencia
  class Jugador extends Persona {

    constructor(nombre, apellido, edad, posicion) {
      //llama al constructor de la clase Persona(padre)    
      super(nombre, apellido, edad);
      this.posicion = posicion;
    }
  
    getDetalles() {

      super.getDetalles();
      console.log(`Posición: ${this.posicion}`);
    }
  }
  
  class Entrenador extends Persona {

    constructor(nombre, apellido, edad, añosExperiencia, idFederacion) {
      super(nombre, apellido, edad);
      this.añosExperiencia = añosExperiencia;
      this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000; 
    }
  
    getDetalles() {
        
      super.getDetalles();
      console.log(`Años de experiencia: ${this.añosExperiencia}`);
      console.log(`ID de Federación: ${this.idFederacion}`);
    }
  }
  
  class Equipo {
    constructor(entrenador, jugadores) {
      this.entrenador = entrenador;
      this.jugadores = jugadores;
    }
  
    getDetalles() {
      console.log("--- Detalles del entrenador ---");
      this.entrenador.getDetalles();
  
      console.log("--- Detalles de los jugadores ---");
      this.jugadores.forEach((jugador, index) => {
        console.log(`Jugador ${index + 1}`);
        jugador.getDetalles();
      });
    }
  }
  
  // Crea jugadores
  const jugadores = [
    new Jugador("Emiliano", "Martínez", 30, "Portero"),
    new Jugador("Nicolás", "Otamendi", 35, "Defensa"),
    new Jugador("Enzo", "Fernández", 22, "Medio"),
    new Jugador("Lionel", "Messi", 35, "Delantero")
  ];
  
  // Crea entrenador
  const entrenador = new Entrenador("Lionel", "Scaloni", 45, 5);
  
  // Crea equipo
  const equipo = new Equipo(entrenador, jugadores);
  
  // Muestra detalles del equipo
  equipo.getDetalles();
  