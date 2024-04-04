const router = require("express").Router(); 
const {saveData, getData} = require("../controllers/flightControler")


router.put("/editFlight", saveData);

router.get("/getData", getData);

module.exports = router;
