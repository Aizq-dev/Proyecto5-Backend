Descripción en español:

Este proyecto implementa una API REST para la gestión de vehículos. Al iniciar el servidor, se ejecuta una seed que borra cualquier dato previo y reinserta los datos iniciales definidos, asegurando un entorno limpio en cada reinicio.

Endpoints disponibles:
GET /api/autos
Devuelve todos los vehículos. Soporta filtros por modelo o marca a través de query parameters.
Ejemplo: http://localhost:4001/api/autos?modelo=M2

GET /api/autos/:id
Devuelve un vehículo específico por su ID.

POST /api/autos
Crea un nuevo vehículo enviando los datos en el cuerpo de la solicitud (body).

PUT /api/autos/:id
Actualiza un vehículo existente por ID. Los nuevos datos se envían en el body.

DELETE /api/autos/:id
Elimina un vehículo por su ID.

Description in English:

This project implements a REST API for managing vehicles. When the server starts, a predefined seed is executed. It clears previous data and inserts fresh seed data, ensuring a clean state on every restart.

Available endpoints:
GET /api/autos
Retrieves all vehicles. Supports query filters by modelo or marca.
Example: http://localhost:4001/api/autos?modelo=M2

GET /api/autos/:id
Retrieves a specific vehicle by its ID.

POST /api/autos
Creates a new vehicle by sending the data in the request body.

PUT /api/autos/:id
Updates an existing vehicle by ID. The data must be sent in the request body.

DELETE /api/autos/:id
Deletes a vehicle by its ID.

