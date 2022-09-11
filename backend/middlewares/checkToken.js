const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");

/**
 * MIDDLEWARE
 * CHECK TOKEN
 */

const checkToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];

  const token = authHeader;

  if (token == null) return res.sendStatus(403);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, tokenInfo) => {
    if (err) {
      return res.sendStatus(401);
    }

    return res.sendStatus("uloga 123");
    // req.tokenInfo = tokenInfo;
    // next();
  });
};

module.exports = checkToken;
