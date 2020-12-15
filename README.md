# My Videos Rest API

[![Build Status](https://travis-ci.org/joemccann/MyVideoRestApi.svg?branch=master)](https://travis-ci.org/andysierra/MyVideoRestApi)

Esta api permite almacenar información básica sobre videos de youtube, como ejemplo.
Por ahora solo en enlace del video en Youtube, mientras se construye el host y se gestiona el almacenamiento.

Videos API viene con un ser de 5 recursos de CRUD:

  - video/list
  - /video/info/:title
  - /video/create
  - /video/delete/:id
  - /video/update/:id


### Instalación

Video API requiere [Node.js](https://nodejs.org/) v4+ .

1) Descargue el .zip o clone el repositorio
2) Instale MongoDB (última versión) y ejecute el daemon Mongod
3) Instale NodeJS y ejecute el siguiente comando:

```sh
$ cd MyVideos-rest-api
$ npm install
$ npm run build
$ npx ts-node-dev ./index.ts
```

La información del servidor se encuentra en el archivo .env, que es pública ya que no se usa passwords por el momento

### Desarrollo

Esta API fue desarrollada con ExpressJS, Mongoose, Cors, Dotenv, Morgan y Body-parser, 

License
----

MIT


Developer site: https://www.linkedin.com/in/andr%C3%A9s-camilo-sierra-hormiga-47165754/  
