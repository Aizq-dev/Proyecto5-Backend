const mongoose = require("mongoose");
const { initialDatabase } = require("../repositories/Autos");

mongoose.set('strict', false)
mongoose.set('strictQuery', false)
mongoose.set('strictPopulate', false)

mongoose
  .connect("mongodb://localhost:27017")
  .then(async () => {
    console.log("Mongoose conectado")
    await initialDatabase()
    
    ;
  })
  .catch((err) => {
    console.log("Error al conectar con DB", err);
    process.exit(1)
  });
