# Índice
1 - [Iniciar base de datos](#iniciar-base-de-datos)
2 - [Métodos API](#metodos-api)

# Iniciar base de datos

Desde el directorio mongodb:
`./bin/mongod --dbpath ./data/db --directoryperdb`

## Comando para inicializar la base de datos:
`npm run installDB`


# Métodos API

## Lista de anuncios
`http://localhost:3000/api/ads`

### Params
* ?limit=[integer]: Limitar el número de resultados.