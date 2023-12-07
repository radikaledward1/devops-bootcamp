// init-mongo.js

// Nombre de la base de datos y la colección
var dbName = 'diaries';
var collectionName = 'entries';

// Documento a insertar
var document = {
    "date": "2023-11-01",
    "weather": "sunny",
    "visibility": "very good",
    "comments": "nice visibility and clean skies"
};

// Conexión a la base de datos
var db = db.getSiblingDB(dbName);

// Crear la colección (si no existe)
db.createCollection(collectionName);
// Insertar el documento
db[collectionName].insert(document);