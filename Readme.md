En este proyecto contamos con una seed, que se implanta en el servidor al iniciarlo, cada vez que se reinicia borra los datos anteriores e inserta de nuevo los de la seed.

Dispone de diferentes endpoints que detallo a continuacion:

- Tipo GET llamado "getAllAutos" para traer todos los documentos, tambien añadi un filtro por query por que acepta modelo o marca.
Ejemplo:
http://localhost:4001/api/autos?modelo=M2

-Tipo GET llamado "getAutoByID" para traer un documento por su id 
http://localhost:4001/api/autos/:id

-Un tipo POST llamado "createAuto" para crear nuevos coches, introudiendo los datos en el body.
http://localhost:4001/api/autos

- Un tipo PUT llamado "updateAutoById" para actualizar o añadir datos de un coche por su id. Los datos se introducen en el body del thunder client
http://localhost:4001/api/autos/:id

-Un tipo DELETE llamado "deleteAuto" para borrar un coche con su id 
http://localhost:4001/api/autos/:id
