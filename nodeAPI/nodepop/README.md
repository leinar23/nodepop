# Índice
- [Iniciar base de datos](#iniciar-base-de-datos)
    - [Comando para inicializar la base de datos](#comando-para-inicializar-la-base-de-datos)
    - [Comando para iniciar proceso de la base de datos](#comando-para-iniciar-proceso-de-la-base-de-datos)
    - [Comando para iniciar aplicación express](#comando-para-iniciar-aplicaci%c3%b3n-express)
    - [Comando para iniciar aplicación express (modo desarrollo)](#comando-para-iniciar-aplicaci%c3%b3n-express-modo-desarrollo)
- [Métodos API](#metodos-api)
    - [Lista de anuncios](#lista-de-anuncios)
    - [Imágenes de anuncios](#imágenes-de-anuncios)

# Iniciar base de datos

## Comando para inicializar la base de datos:
`npm run installDB`

## Comando para iniciar proceso de la base de datos:
`./bin/mongod --dbpath ./data/db --directoryperdb`

## Comando para iniciar aplicación express:
`npm start`

## Comando para iniciar aplicación express (modo desarrollo):
`npm run dev`

# Métodos API

## Lista de anuncios
`http://localhost:3000/api/ads`

### Params
- `?limit=[integer]`: Limita el número de resultados.
- `?skip=[integer]`: Ignora el número de resultados indicados.
- `?nombre=[String]`: Busca artículo por nombre exacto.
- `?venta=[true | false]`: Muestra artículos cuyo campo venta sea el indicado.
- `?sort=[param]`: Ordena por el campo indicado.
- `?tags=[String]`: Muestra artículos con el tag indicado.
- `?precio=[integer]`: Muestra artículos con el precio exacto.
- `?precio=[-integer]`: Muestra artículos con el precio menor que el indicado.
- `?precio=[integer-]`: Muestra artículos con el precio mayor que el indicado.
- `?precio=[integer-integer]`: Muestra artículos con el precio entre el rango indicado.
- `/_id`: Busca artículos con el ID indicado.

## Imágenes de anuncios
`http://localhost:3000/images/anuncios`

### Params
- `/[String]`: Busca la imagen con el nombre exacto. Se debe indicar extensión.
