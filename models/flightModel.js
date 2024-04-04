const { Schema, model } = require("mongoose");

// Define flightSchema using Schema constructor
const flightSchema = new Schema({
    Altitude: { type: Number, required: true, min: 0, max: 3000 },
    HIS: { type: Number, required: true, min: 0, max: 360 }, 
    ADI: { type: Number, required: true, min: 0, max: 100 }, 
});

// Create Flight model based on flightSchema
const Flight = model("data", flightSchema);

module.exports = Flight;
