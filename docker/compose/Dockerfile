# Imagen
FROM node:16-alpine

# folder dentro de la imagen donde recide el codigo
WORKDIR /app

# Copia todo el contenido del directorio actual al directorio /app de la imagen
COPY . ./

EXPOSE 3000

# Instala las dependencias del proyecto
RUN npm install

CMD ["npm", "start"]