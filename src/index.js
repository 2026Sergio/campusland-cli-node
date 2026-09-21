// src/index.js

// Omitimos los dos primeros índices [0] y [1] usando comas vacías [ , , ]
// [0] es el binario de Node y [1] es la ruta del script

// src/index.js

// 1. Importaciones usando la extensión .js obligatoria en ESM
import { agregarCamper, listarCampers, buscarCamperPorNombre } from './campers.js';

// 2. Lectura de argumentos desde la consola
const [, , comando, arg1, arg2] = process.argv;

try {
  // Evaluamos el comando ingresado en la terminal
  // switch 
  switch (comando) {
    case 'agregar': {
      // Uso de Top-Level await sin necesidad de envolver en una función async
      const c = await agregarCamper(arg1, arg2);
      console.log(' Camper registrado:', c);
      break;
    }

    case 'listar': {
      const lista = await listarCampers();
      if (lista.length === 0) {
        console.log('ℹ No hay campers aún.');
      } else {
        console.table(lista);
      }
      break;
    }

    case 'buscar': {
        const resultados = await buscarCamperPorNombre(arg1);
        if (resultados.length === 0) {
          console.log(' No se encontraron campers con ese nombre.');
        } else {
          console.table(resultados);
        }
        break;
      }

    default:
      console.log(' Comando no válido. Usa: agregar, listar o buscar');
  }
} catch (error) {
  console.error(' Error:', error.message);
}
