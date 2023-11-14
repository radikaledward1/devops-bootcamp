# Imagen del contenedor
FROM node:16-alpine

# folder dentro del contenedor donde recide el codigo
WORKDIR /app

# Copia todo el contenido del directorio actual al directorio /app del contenedor
COPY . ./

EXPOSE 3000

# Instala las dependencias del proyecto
RUN npm install

CMD ["npm", "start"]