const { Router } = require("express");
const { getPlanets, createPlanets } = require('../controllers');
const { planetValidation } = require('../middlewares');

const router = Router();

router.get("/",getPlanets);

router.post("/",planetValidation,createPlanets);

module.exports = router;