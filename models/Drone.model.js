const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    propellers: {
        type: String,
        required: true,
    },
    maxSpeed: {
        type: Number,
        required: true,
    }

});

const DroneModel = mongoose.model("drones", droneSchema);
//const DroneModel = mongoose.model("TITRE", droneSchema);


module.exports = DroneModel;