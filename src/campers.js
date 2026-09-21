// src/campers.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Recreamos __filename y __dirname para ECMAScript Modules (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construimos la ruta absoluta hacia el archivo de datos
const RUTA_DATA = path.join(__dirname, '..', 'data', 'campers.json');

/**
 * Lee y retorna los campers almacenados en el archivo JSON.
 */
export async function leerCampers() {
  try {
    const contenido = await fs.readFile(RUTA_DATA, 'utf-8');
    return JSON.parse(contenido);
  } catch (error) {
    // Si el archivo no existe (ENOENT), se devuelve un array vacío en lugar de romper el programa
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

// Exportamos una función asíncrona que recibe como parámetro el array actualizado ('lista')
export async function guardarCampers(lista) {
  
    // 'await': Espera a que termine la escritura en disco antes de continuar la ejecución.
    // 'fs.writeFile': Función de Node.js que escribe (o sobreescribe) datos en un archivo.
    // 'RUTA_DATA': La ruta absoluta hacia el archivo 'data/campers.json'.
    // 'JSON.stringify(lista, null, 2)': Convierte el objeto/array de JavaScript en texto en formato JSON.
    // - 'lista': El dato a convertir.
    // - 'null': No aplica ningún filtro o transformación de propiedades.
    // - '2': Aplica una indentación de 2 espacios para que el JSON quede formateado y legible.
    await fs.writeFile(RUTA_DATA, JSON.stringify(lista, null, 2));
}

// Exportación nombrada de una función asíncrona para registrar un nuevo camper
export async function agregarCamper(nombre, stack) {
    // 1. Validación: Verifica que ambos parámetros contengan un valor
    if (!nombre || !stack) {
      throw new Error('Debes ingresar nombre y stack');
    }
  
    // 2. Lee los campers existentes llamando a la función que creamos antes
    const campers = await leerCampers();
  
    // 3. Crea el nuevo objeto con ID autoincrementable y datos limpios (.trim())
    const nuevoCamper = {
      id: campers.length > 0 ? campers[campers.length - 1].id + 1 : 1,
      nombre: nombre.trim(),
      stack: stack.trim(),
      creadoEn: new Date().toLocaleDateString()
    };
  
    // 4. Agrega el nuevo registro al arreglo en memoria
    campers.push(nuevoCamper);
  
    // 5. Guarda la lista actualizada en el archivo JSON
    await guardarCampers(campers);
  
    // 6. Retorna el objeto del camper recién creado
    return nuevoCamper;
}

// Función para obtener la lista completa de campers
export async function listarCampers() {
    // Retorna directamente el contenido del archivo JSON leído
    return await leerCampers();
  }
  
  // Función para buscar campers por coincidencia en el nombre
  export async function buscarCamperPorNombre(termino) {
    // 1. Lee todos los campers del archivo
    const campers = await leerCampers();
  
    // 2. Filtra la lista convirtiendo ambos textos a minúsculas para ignorar mayúsculas/minúsculas
    return campers.filter(c => c.nombre.toLowerCase().includes(termino.toLowerCase()));
}

// funcion envolvente con el uso de await 

