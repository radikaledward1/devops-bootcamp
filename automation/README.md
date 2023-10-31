### Instrucciones

1.- Fork del repositorio

2.- Crear un script con el nombre automation.sh

3.- El script debera crear una carpeta temporal llamada "tempdir" y dentro de ella los subdirectorios "templates" y "static"

4.- Dentro de la carpeta "tempdir" copiar la carpeta "static", "templates" y la aplicacion "desafio2_app.py"

5.- El script permitira construir un docketfile y estara ubicado en la carpeta temporal "tempdir"

6.- Que informacion debe de tener el dockerfile

````
FROM python
RUN pip install flask
COPY ./static /home/myapp/static/
COPY ./templates /home/myapp/templates/
COPY desafio2_app.py /home/myapp/
EXPOSE 5050
CMD python3 /home/myapp/desafio2_app.py

````
7.- El Script debe permitir la construccion de la aplicacion con:

````
docker build -t nombreapp .
````

8.- La aplicacion quedara iniciando con

````
docker run -t -d -p 5050:5050 --name nombreapprunning nombreapp
````

8.- El script tendra salida

````
docker ps -a
````
9.- Si la construccion es correcta, revizar los logs con

````
docker logs "CONTAINER ID"
````

10.- Se puede validar con el navegador en "http://localhost:5050 o revizar IP con docker "inspect"

````
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
````