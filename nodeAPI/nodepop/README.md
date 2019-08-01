# Índice
1 - [Iniciar base de datos](#iniciar-base-de-datos)

# Iniciar base de datos

- Desde el directorio mongodb:
`./bin/mongod --dbpath ./data/db --directoryperdb`

# Métodos API

## Lista de anuncios
`http://localhost:3000/api/ads`

### Params
* ?limit=[integer]: Limitar el número de resultados.