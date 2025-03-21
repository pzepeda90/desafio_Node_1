
const { registrar, leer } = require('./operaciones.js');

// Obtener argumentos de la línea de comandos
const operacion = process.argv[2];

if (operacion === 'registrar') {
  // Verificar que existan todos los argumentos necesarios
  if (process.argv.length < 8) {
    console.log('Faltan datos para el registro. Se requiere: nombre, edad, tipo, color y enfermedad');
    return;
  }
  
  // Capturar los argumentos para el registro
  const nombreAnimal = process.argv[3];
  const edad = process.argv[4];
  const tipoAnimal = process.argv[5];
  const colorAnimal = process.argv[6];
  const enfermedad = process.argv[7];
  
  // Llamar a la función registrar
  registrar(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
} 
else if (operacion === 'leer') {
  // Llamar a la función leer
  leer();
} 
else {
  console.log('Operación no válida. Las opciones son: registrar o leer');
}
