const mongoose = require("mongoose");

const autoSchema = new mongoose.Schema({    modelo: String,
    precio: String,
    grupo: String,
    marca: String
});

const Auto = mongoose.model("Auto", autoSchema);

module.exports = {Auto};
