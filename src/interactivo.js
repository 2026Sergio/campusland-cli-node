// src/interactivo.js (ESM)

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { agregarCamper } from './campers.js';

// Creamos la interfaz de lectura vinculando la entrada y salida de la consola
const rl = readline.createInterface({ input, output });

try {
  console.log('=== REGISTRO INTERACTIVO DE CAMPERS (ESM) ===');
  
  // Realiza preguntas en la terminal de forma asíncrona
  const nombre = await rl.question('¿Nombre del camper? ');
  const stack = await rl.question('¿Stack tecnológico? ');

  // Guarda el camper registrado mediante la función del módulo campers.js
  const guardado = await agregarCamper(nombre, stack);
  console.log(' Registrado en JSON:', guardado);
} finally {
  // ¡Obligatorio! Cierra la interfaz para que el proceso de Node finalice y no quede congelado
  rl.close();
}