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
    const agency_data = await pool.query("SELECT * FROM agency limit 1");

    var tokenInfo = {
      t_agency_name: agency_data.rows[0].name,
      t_agency_email: agency_data.rows[0].email,
      t_agency_number: agency_data.rows[0].number,
      t_agency_address: agency_data.rows[0].address,
      t_agency_description: agency_data.rows[0].description,
      t_agency_city: agency_data.rows[0].city,
      t_role_id: req.data.role_id,
      t_user_id: req.data.normal_user_id,
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

exports.getAllCountries = catchAsync(async (req, res, next) => {
  const countries = await pool.query(
    "SELECT country_id,name FROM country ORDER BY country_id"
  );

  res.status(200).send({ countries: countries.rows });
});

exports.getTours = catchAsync(async (req, res, next) => {
  const tours = await pool.query(
    `SELECT c.name as country_name, t.*, (SELECT ti.image_path AS url from travel_image ti WHERE t.travel_id = ti.travel_id LIMIT 1) FROM travel t 
    INNER JOIN country c ON t.country_id = c.country_id 
    WHERE status=$1 ORDER BY travel_id `,
    [true]
  );

  res.status(200).send({ tours: tours.rows });
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  await pool.query("UPDATE travel SET status = false WHERE travel_id = $1", [
    req.body.travel_id,
  ]);

  // await pool.query("DELETE FROM travel WHERE travel_id = $1", [
  //   req.body.travel_id,
  // ]);

  res.status(200).send("Uspješno izbrisano");
});

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await pool.query(
    "SELECT normal_user_id,email FROM normal_user WHERE status=$1 ORDER BY normal_user_id ",
    [true]
  );

  console.log(users.rows);

  res.status(200).send({ users: users.rows });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await pool.query(
    "UPDATE normal_user SET status = false WHERE normal_user_id = $1",
    [req.body.user_id]
  );

  res.status(200).send("Uspješno izbrisano");
});

exports.getTourData = catchAsync(async (req, res, next) => {
  console.log(req.body);

  const tourData = await pool.query(
    "SELECT * FROM travel WHERE travel_id = $1",
    [req.body.tour_id]
  );

  console.log(tourData.rows[0]);

  res.status(200).json({ tourData: tourData.rows[0] });
});

exports.updateTour = catchAsync(async (req, res, next) => {
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
    tour_id,
  } = req.body;

  await pool.query(
    `UPDATE travel SET city = $1, country_id = $2, price = $3, 
    description = $4, start_date = $5, end_date = $6, number_of_days = $7, max_number = $8, min_number = $9  
    WHERE travel_id = $10`,
    [
      city,
      country,
      price,
      description,
      start_date,
      end_date,
      number_of_days,
      max_number,
      min_number,
      tour_id,
    ]
  );

  res.sendStatus(200);
});

exports.tourSignUp = catchAsync(async (req, res, next) => {
  const { travel_id, user_id } = req.body;

  const check = await pool.query(
    `SELECT * FROM registered_travels WHERE travel_id = $1 AND normal_user_id = $2`,
    [travel_id, user_id]
  );

  if (!check.rows.length) {
    await pool.query(
      "INSERT INTO registered_travels (travel_id, normal_user_id) VALUES ($1,$2)",
      [travel_id, user_id]
    );
  }

  res.sendStatus(200);
});

exports.tourInfo = catchAsync(async (req, res, next) => {
  const { tour_id } = req.body;

  const tour = await pool.query(
    `SELECT c.name as country_name, t.* FROM travel t 
    INNER JOIN country c ON t.country_id = c.country_id 
    WHERE status=$1 AND t.travel_id = $2 ORDER BY travel_id `,
    [true, tour_id]
  );

  const images = await pool.query(
    `SELECT image_path as url FROM travel_image
    WHERE travel_id = $1 ORDER BY travel_image_id `,
    [tour_id]
  );

  console.log(tour.rows);
  console.log(images.rows);

  res.status(200).json({ tour_info: tour.rows, images: images.rows });
});

exports.getWishlist = catchAsync(async (req, res, next) => {
  const { user_id } = req.body;

  const tours = await pool.query(
    `SELECT c.name as country_name, t.*, (SELECT ti.image_path AS url from travel_image ti WHERE t.travel_id = ti.travel_id LIMIT 1) FROM travel t
    INNER JOIN country c ON t.country_id = c.country_id 
    WHERE status=$1 AND t.travel_id IN (SELECT wl.travel_id FROM wishlist wl WHERE wl.normal_user_id = $2)
    ORDER BY travel_id `,
    [true, user_id]
  );

  console.log(tours.rows);

  res.status(200).send({ tours: tours.rows });
});

exports.addToWishlist = catchAsync(async (req, res, next) => {
  const { user_id, travel_id } = req.body;

  const check = await pool.query(
    `SELECT * FROM wishlist WHERE travel_id = $1 AND normal_user_id = $2`,
    [travel_id, user_id]
  );

  if (!check.rows.length) {
    await pool.query(
      "INSERT INTO wishlist (normal_user_id, travel_id) VALUES ($1,$2)",
      [user_id, travel_id]
    );
  }

  res.sendStatus(200);
});

exports.deleteFromWishlist = catchAsync(async (req, res, next) => {
  const { user_id, travel_id } = req.body;

  await pool.query(
    "DELETE FROM wishlist WHERE travel_id = $1 AND normal_user_id = $2",
    [travel_id, user_id]
  );

  res.sendStatus(200);
});
