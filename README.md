# docker-node-mariadb-api
conexion de docker node y mariadb


### Crear contenedor de mariadb

```
  docker run --name mariadb -e MYSQL_ROOT_PASSWORD=tanjiro -p 3308:3306 -d docker.io/library/mariadb:10.3
```

### conectar al db

```
  mysql --host 127.0.0.1 -P 3308 -u root -p
  pass: tanjiro
```


### Crear imagen desde el archivo dockerfile

```
   docker build -t node_backend_mariadb .
```

### crear imagen a partir del docker-compose

```
  docker-compose build
```

### Iniciar los containers

```
  docker-compose up
```