const pool = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const path = require("path");
const multer = require("multer");

/**
 * POST
 * LOGIN
 * 1)
 */

exports.loginAuthentication = catchAsync(async (req, res, next) => {
  const { email, password, admin } = req.body;

  // console.log({ admin });

  if (admin) {
    var data = await pool.query("SELECT * FROM agency WHERE email = $1", [
      email,
    ]);
  } else {
    var data = await pool.query("SELECT * FROM normal_user WHERE email = $1", [
      email,
    ]);
  }

  if (data.rows.length == 0) {
    return res.status(400).send("Ne postoji korisnik s tim emailom!");
  }

  if (await bcrypt.compare(password, data.rows[0].password)) {
    console.log("Radi lozinke se podudaraju");
    // return res.status(200).send("Korisnik je uspjesno prijavljen");

    req.data = data.rows[0];
    next();
  } else {
    return res.status(400).send("Neispravna lozinka");
  }
});

/**
 * POST
 * LOGIN
 * 2)
 */

exports.sendToken = async (req, res, next) => {
  const { admin } = req.body;

  // const agencyInfo = await pool.query(
  //   "SELECT * FROM tabela_proba WHERE email = $1",
  //   [email]
  // );

  console.log("prijeee");

  if (admin) {
    var tokenInfo = {
      t_agency_name: req.data.name,
      t_agency_email: req.data.email,
      t_agency_number: req.data.number,
      t_agency_address: req.data.address,
      t_agency_description: req.data.description,
      t_agency_city: req.data.city,
      t_role_id: req.data.role_id,
    };
  } else {
    // TREBAM DODATI JOS NEKE STVARI U TOKEN O KORISNIKU NE O AGENCIJI
    const agency_data = await pool.query("SELECT * FROM agency limit 1");

    var tokenInfo = {
      t_agency_name: agency_data.rows[0].name,
      t_agency_email: agency_data.rows[0].email,
      t_agency_number: agency_data.rows[0].number,
      t_agency_address: agency_data.rows[0].address,
      t_agency_description: agency_data.rows[0].description,
      t_agency_city: agency_data.rows[0].city,
      t_role_id: req.data.role_id,
    };
  }

  const accessToken = jwt.sign(tokenInfo, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "24h",
  });

  res.status(200).json({ access_token: accessToken });
};

/**
 * POST
 * REGISTRACIJA
 * 1)
 */

exports.userRegistration = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM normal_user WHERE email = $1", [
    email,
  ]);

  if (user.rows.length == 0) {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO normal_user (email, password) VALUES ($1,$2)",
      [email, hashedPassword]
    );

    return res.sendStatus(200);
  }

  return res.status(400).send("Postoji račun s datim emailom");
  // console.log(req.headers["authorization"]);
});

exports.agencyRegistration = catchAsync(async (req, res, next) => {
  const { email, password, name, description, number, address, city } =
    req.body;

  const agency = await pool.query("SELECT * FROM agency WHERE email = $1", [
    email,
  ]);

  if (agency.rows.length == 0) {
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO agency (email, password, name, description, number, address, city) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [email, hashedPassword, name, description, number, address, city]
    );

    return res.sendStatus(200);
  }

  return res.status(400).send("Postoji račun s datim emailom");
  // console.log(req.headers["authorization"]);
});

/**
 * MULTER - diskStorage
 */

exports.storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: (req, file, cb) => {
    const photoName = Date.now() + path.extname(file.originalname);
    cb(null, photoName);
  },
});

exports.uploadImages = catchAsync(async (req, res, next) => {
  const { travel_id } = req.body;

  // console.log(JSON.stringify(req.body));
  // console.log(JSON.stringify(travel_id));

  for (const photoName of req.files) {
    await pool.query(
      "INSERT INTO travel_image (travel_id, image_path) VALUES ($1,$2)",
      [travel_id, photoName.filename]
    );
    console.log(photoName.filename);
  }

  res.sendStatus(200);
});

exports.createNewTour = catchAsync(async (req, res, next) => {
  const {
    city,
    country,
    price,
    description,
    start_date,
    end_date,
    number_of_days,
    max_number,
    min_number,
  } = req.body;

  // console.log({
  //   city,
  //   country,
  //   price,
  //   description,
  //   start_date,
  //   end_date,
  //   number_of_days,
  //   max_number,
  //   min_number,
  // });

  console.log(req.body);

  const s_date = start_date.split("T")[0];
  const e_date = end_date.split("T")[0];

  const travel_id = await pool.query(
    "INSERT INTO travel (city,country_id,price,description,start_date,end_date,number_of_days,max_number,min_number,available_seats) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING travel_id",
    [
      city,
      1,
      price,
      description,
      s_date,
      e_date,
      number_of_days,
      max_number,
      min_number,
      max_number,
    ]
  );

  res.status(200).send(travel_id);
});
