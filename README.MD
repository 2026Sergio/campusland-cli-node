# Campuslands CLI - Gestor en Node.js puro con ESM

Gestor en línea de comandos (CLI) desarrollado en Node.js nativo utilizando **ECMAScript Modules (ESM)** para administrar el registro y consulta de campers con persistencia de datos en un archivo JSON local.

---

##  Estructura del Proyecto

```text
CAMPPUSLANDS-CLI-NODE/
├── data/
│   └── campers.json      # Archivo JSON donde se guardan los datos
├── src/
│   ├── campers.js        # Módulo de funciones (lectura, escritura, lógica)
│   ├── index.js          # Punto de entrada principal para comandos por terminal (process.argv)
│   └── interactivo.js    # Modo interactivo con preguntas en consola (node:readline)
├── .gitignore
├── package.json
└── README.md
```

Requisitos Previos

    Node.js: Versión 18.0.0 o superior (necesario para el soporte nativo de ESM y Top-Level await).

## Instalación

    Clona o descarga el repositorio en tu máquina local.

    Abre una terminal dentro de la carpeta raíz del proyecto (CAMPPUSLANDS-CLI-NODE).

    No requiere instalar dependencias externas, ya que utiliza módulos 100% nativos de Node.js (node:fs/promises, node:path, node:readline/promises, node:process).

## Uso de la Aplicación
1. Ejecución por comandos de la terminal (src/index.js)

Pasa el comando y los argumentos directamente desde la línea de comandos:

    Agregar un nuevo camper:
    Bash

    node src/index.js agregar "Carlos Morales" "Node.js"

    Listar todos los campers:
    Bash

    node src/index.js listar

    Buscar camper por nombre:
    Bash

    node src/index.js buscar Carlos

2. Modo Interactivo (src/interactivo.js)

Ejecuta el script para responder a las preguntas directamente en la consola:
Bash

node src/interactivo.js

Sigue las instrucciones en pantalla para ingresar el nombre y stack tecnológico.

## Tecnologías y Características

    ECMAScript Modules (ESM): Configurado mediante "type": "module" en package.json.

    Rutas Seguras: Uso de import.meta.url y fileURLToPath para construir rutas absolutas independientes del sistema operativo.

    Top-Level await: Ejecución de operaciones asíncronas directamente en la raíz del script sin necesidad de envoltorios.

    Persistencia de Datos: Lectura y escritura asíncrona mediante fs/promises sobre el archivo data/campers.json.

    Interfaz Interactiva: Uso del módulo nativo node:readline/promises para capturar la entrada del usuario.