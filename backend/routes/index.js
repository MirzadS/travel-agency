const express = require("express");
const router = express.Router();
const pool = require("../database");
const indexController = require("../controllers/indexController");
const checkToken = require("../middlewares/checkToken");

/* TESTNA. */
router.get("/", function (req, res, next) {
  // console.log(req.headers["authorization"]);

  res.status(200).json({ podaciServer: req.body });
  // res.status(200).send("evo podataka sa servera");
});

router.post(
  "/login",
  indexController.loginAuthentication,
  indexController.sendToken
);
router.get("/pocetna"), checkToken;

router.post("/registracija", indexController.userRegistration);
router.post("/registracija/admin", indexController.agencyRegistration);

module.exports = router;
