const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const guest = (req, res, next) => {
  try {
    console.log(!req.cookies?.token);
    if (!req.cookies?.token) {
      next();
    } else {
      try {
        let decoded = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        return res.redirect("/profile");
      } catch (err) {
        next();
      }
    }
  } catch (error) {
    logger.error("middleware guest: "+error)
  }
};
module.exports = guest;