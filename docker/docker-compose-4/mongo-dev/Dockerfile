# Utiliza la imagen oficial de MongoDB
FROM mongo:latest

# Copia el script de inicialización a la carpeta
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expone el puerto de MongoDB para conexiones externas
EXPOSE 27017

# Configura MongoDB para aceptar conexiones externas
CMD ["mongod", "--bind_ip_all"]