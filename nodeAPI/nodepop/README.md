# Índice
1 - [Iniciar base de datos](#iniciar-base-de-datos)
    1 - [Comando para inicializar la base de datos](#comando-para-inicializar-la-base-de-datos)
    2 - [Comando para iniciar proceso de la base de datos](#comando-para-iniciar-proceso-de-la-base-de-datos)
    3 - [Comando para iniciar aplicación express](#comando-para-iniciar-aplicaci%c3%b3n-express)
    4 - [Comando para iniciar aplicación express (modo desarrollo)](#comando-para-iniciar-aplicaci%c3%b3n-express-modo-desarrollo)
2 - [Métodos API](#metodos-api)

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
* ?limit=[integer]: Limitar el número de resultados.