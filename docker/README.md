## Docker

### Docker Images
- Lista todas las imagenes que se tienen en la maquina local

``````
docker images
``````

### Docker PS
- Lista los contenedores en ejecucion

``````
docker ps
``````

### Docker Pull
- Permite descargar una imagen de algun repositorio principalmente docker hub

``````
docker pull <image>
``````

### Docker Push
- Permite subir la imagen a cualquier repositorio principalmente Docker Hub, AWS, etc

``````
docker push <image>
``````

### Docker Exec
- Permite acceder o entrar al contenedor

``````
docker exec -it <container_id> bash/sh
``````

### Docker Inspect
- Arroja informacion a detalle del contenedor
``````
docker inspect <container>
``````

### Docker RM (Remove)
- Permite remover imagenes, contenedores, Volumenes
``````
docker rm <container>
docker rmi <image>

### Ejemplo 1
- Descargar imagen de Jenkins
[Desde Docker Hub] (https://hub.docker.com/r/jenkins/jenkins)

Paso 1:Descargar imagen de Jenkins
``````
docker pull jenkins/jenkins:latest
``````
Paso 2: Buscar la imagen
``````
docker images | grep jenkins
``````
Paso 3:Ejecutar contenedor
``````
docker run -d jenkins/jenkins:latest
``````
Paso 4: Listar si el contenedor se ejecuto
``````
docker ps
``````
Paso 5: Mapear puerto al contenedor
``````
docket run -d -p 8080:8080 jenkins/jenkinis:latest
``````
Paso 6: Eliminar contenedor
``````
docker rm -f <container_id>
``````
Paso 7: Iniciar | Detener | Reiniciar contenedor
``````
docker start <container_id>
``````
``````
docker stop <container_id>
``````

### Variables de Entorno
``````
docker run -d -e "prueba1=4321" nathanpeck/greeting
``````
Listar y visualizar las variables de entorno que se le asignan con el comando una vez dentro del contenedor
``````
printenv
``````
``````
echo $prueba1
``````
### MySQL
MYSQL_ROOT_PASSWORD=1234567
MYSQL_DATABASE=docker-db
MYSQL_USER=docker-user
MYSQL_PASSWORD=12345

``````
docker run -d -p 3306:3306 -e "MYSQL_ROOT_PASSWORD=1234567" -e "MYSQL_DATABASE=docker-db" -e "MYSQL_USER=docker-user" -e "MYSQL_PASSWORD=12345" mysql
``````
Revisar los Logs de un contenedor.
``````
docker logs <contaniner>
``````

### Apache
Instalar imagen de servidor Apache
``````
docker pull httpd
``````
Correr contenedor Apache asignando un nombre (apache)
``````
docker run -d --name apache -p 80:80 httpd
``````
Copia un archivo desde el folder actual a un folder en el contenedor
``````
docker cp index.html apache:/tmp
``````

### Volumes
``````
docker run -v <volume-name>:/var/lib/mysql mysql
``````
Persiste los datos dentro de un folder del volumen 'home/usuario/data'
``````
docker run -v home/usuario/data:/var/lib/mysql mysql
``````
Remover un volumen
``````
docker volume rm <volume-name>
``````
Crea contenedor a partir de una imagen, lo corre, le asigna un volumen, y se especifica que se va almacenar ahi del contenedor
``````
docker run -d -it --name <container-name> -v "volumeName":/tmp ubuntu:xenial
``````
Corre un contenedor persiste en un volumen un archivo de un folder local y especifica el archivo dentro del contenedor
``````
docker run -v $PWD/index.html:/usr/share/nginx/html/index.html -d -p 80:80 nginx
``````

### Networking
Lista los network configurados
``````
docker network ls
``````
