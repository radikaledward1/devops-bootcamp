#!bin/bash

docker run --name bootcamp-scripting -d -p 80:80 nginx

docker cp . bootcamp-scripting:/usr/share/nginx/html

docker exec -it bootcamp-scripting ls /usr/share/nginx/html