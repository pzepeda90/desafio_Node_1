
const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
  // Leer archivo de citas existente
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  
  // Crear nuevo objeto de cita
  const nuevaCita = {
    nombreAnimal,
    edad,
    tipoAnimal,
    colorAnimal,
    enfermedad
  };
  
  // Agregar la nueva cita al arreglo
  citas.push(nuevaCita);
  
  // Guardar el arreglo actualizado en el archivo
  fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
  
  console.log('Cita registrada con éxito');
};

// Función para leer todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  console.log('Listado de citas:');
  console.log(citas);
};

module.exports = { registrar, leer };
