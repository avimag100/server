const router = require("express").Router();
const flightRoutes = require("./flightRoutes")
require("dotenv").config();

router.use("/flight", flightRoutes); 

router.use((err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg; 
    if (err.stack) errorObj.stack = err.stack; 
    if (process.env.MODE === "production" || !Object.keys(errorObj).length) {
        return res.status(err.status ?? 500).send("There was an error");
    }
    res.status(err.status ?? 500).json(errorObj);
});


module.exports = router; 