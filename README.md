# API REST con Node.js, Express y Sequelize

## Descripción

Proyecto académico desarrollado utilizando Node.js, Express, PostgreSQL y Sequelize. La aplicación implementa endpoints REST básicos, manejo de errores y validación de respuestas mediante códigos de estado HTTP.

## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize
* Postman
* Git y GitHub

## Endpoints disponibles

### Health Check

**GET /health**

Verifica la conexión con la base de datos.

Respuesta:

```json
{
  "status": "ok",
  "db": "connected",
  "orm": "sequelize"
}
```

### Test

**GET /test**

Obtiene una respuesta de prueba.

**POST /test**

Crea un registro de prueba.

Ejemplo:

```json
{
  "nombre": "Romina"
}
```

**PUT /test/:id**

Actualiza un registro de prueba.

**DELETE /test/:id**

Elimina un registro de prueba.

Respuesta:

```json
{
  "codigo": "DELETE_SUCCESS",
  "mensaje": "Registro eliminado correctamente"
}
```

## Códigos HTTP implementados

* 200 OK
* 201 Created
* 400 Bad Request
* 404 Not Found
* 500 Internal Server Error

## Manejo de errores

La aplicación cuenta con:

* Middleware global de errores.
* Middleware para rutas no encontradas.
* Validación de datos en solicitudes POST.

## Autor

Romina Angel
