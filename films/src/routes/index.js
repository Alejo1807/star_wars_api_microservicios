const { Router } = require("express");
const { getFilms, createFilms } = require('../controllers');
const { filmValidation } = require('../middlewares');

const router = Router();

router.get("/",getFilms);

router.post("/",filmValidation,createFilms);

module.exports = router;