# docker-node-mariadb-api
conexion de docker node y mariadb


### Crear contenedor de mariadb

```
  docker run -p 3307:3306 -d --name tanjiro -e MYSQL_ROOT_PASSWORD=tanjiro mariadb/server:10.4
```