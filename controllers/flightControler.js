const Flight = require('../models/flightModel');
const mongoose = require('mongoose');

const dbConnect = mongoose.connection.collection("data");

// Define flight controller object
const flightctrl = {
    // Controller method to save flight data
    async saveData(req, res, next) {
        try {
            // request data
            const { Altitude, HIS, ADI } = req.body;

            const data = await Flight.findOne({ id: "10" });

            // update 
            data.Altitude = Altitude;
            data.HIS = HIS;
            data.ADI = ADI;

            // Save the updated
            await data.save();

            res.json({ message: "data updated" });

        } catch (err) {

            next(err);
        }
    },
    // Controller method to retrieve flight data
    async getData(req, res, next) {
        try {
            const data = await Flight.findOne({ id: "10" });

            res.json(data);

        } catch (err) {
            
            next(err);
        }
    }
};

// Export the flightctrl object to make it accessible from other modules
module.exports = flightctrl;
