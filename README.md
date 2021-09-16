# Modelo_GraphQL_Apollo_Sequelize_Postgres

COMO ARMAR UN BACKEND CON GRAPHQL-SEQUELIZE-POSTGRESQL

hacer todo esto siempre dentro de la carpeta backend.

1) npm init -y
2) npm i sequelize@5.15.1 pg pg-hstore
   npx sequelize-cli@5.4.0 init
3) npm i -D @babel/core @babel/preset-env @babel/node nodemon
4) crear carpeta config y adentro config.json e index.js.
   mofificar config.json:
   
   "serverPort": 4000,
   "development": {
    "username": "postgres",
    "password": "Juanca00",
    "database": "cms",
    "host": "localhost",
    "dialect": "postgres"
    }, 
5) Crear .gitignore y .babelrc
6) npm i apollo-server graphql
7) crear carpeta src y dentro index.js
8) copiar en package.json: 
   "scripts": {
    "start": "nodemon src/index.js --ext js,graphql --exec babel-node"
   },
9) crear carpeta models
10) Por cada tabla hacer: (poner siempre la primera letra en mayuscula del name)
    npx sequelize-cli model:generate --name User --attributes username:string 
    Cada vez que modificamos una tabla hacer:
    NO USAR ESTE COMANDO!! npx sequelize-cli db:migrate (este comando genera las tablas en postgres y las podemos ver con el Pg-admin)
11) npm i merge-graphql-schemas
12) en el archivo index.js de mosels, modificar la constante models segun los modelos que declare
