const express = require('express');
const router = express.Router();

//import.destinations controlleer
const destinationsCtrl = require("../controllers/destinations");

//Define the Route below
router.post("/flights/:id/destinations", destinationsCtrl.create)

module.exports = router;