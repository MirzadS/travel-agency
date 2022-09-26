const express = require("express");
const router = express.Router();
const pool = require("../database");
const indexController = require("../controllers/indexController");
const checkToken = require("../middlewares/checkToken");
const multer = require("multer");

const upload = multer({ storage: indexController.storage });

router.get("/", function (req, res, next) {
  res.status(200).json({ podaciServer: req.body });
});

router.post(
  "/login",
  indexController.loginAuthentication,
  indexController.sendToken
);
router.get("/pocetna"), checkToken;

router.post("/registracija", indexController.userRegistration);
router.post("/registracija/admin", indexController.agencyRegistration);

router.post(
  "/fotografije-putovanja",
  upload.array("file"),
  indexController.uploadImages
  // upload.single("file"),
);
router.post("/novo-putovanje", indexController.createNewTour);
router.get("/lista-drzava", indexController.getAllCountries);
router.get("/lista-putovanja", indexController.getTours);
router.post("/izbrisi-putovanje", indexController.deleteTour);

router.get("/lista-korisnika", indexController.getUsers);
router.post("/izbrisi-korisnika", indexController.deleteUser);

router.post("/podaci-putovanja", indexController.getTourData);

router.put("/uredi-putovanje", indexController.updateTour);

router.post("/prijavi-putovanje", indexController.tourSignUp);

router.post("/detalji-putovanja", indexController.tourInfo);

router.post("/spasena-putovanja", indexController.getWishlist);
router.post("/spasi-putovanje", indexController.addToWishlist);
router.post("/izbrisi-spaseno-putovanje", indexController.deleteFromWishlist);

module.exports = router;
