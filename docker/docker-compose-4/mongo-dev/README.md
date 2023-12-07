- Para construir la imagen en base al docker file
``````
docker build -t mongo-dev .

``````
- Para crear el contenedor en base a la imagen creada en el punto de arriba
``````
docker run -d -p 27017:27017 --name diaries-mongo mongo-dev

``````