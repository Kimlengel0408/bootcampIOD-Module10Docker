const express = require("express");
const router = express.Router();
const Controller = require("../controllers/add");

router.use(express.json());

router.get("/", Controller.addition);

module.exports = router;