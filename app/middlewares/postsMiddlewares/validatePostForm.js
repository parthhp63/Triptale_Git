const logger = require("../../config/logger");
const conn = require("../../config/mysql_connection");

const validatePostForm =async (req, res, next) => {
  try {
       const privacyQuery = "select * from privacy";
        const [result] = await conn.query(privacyQuery);
    if (req.path == "/insertPost" && req.files.length == 0) {
          req.flash('msg', 'select at least one image');
          return res.render("components/create/posts/createPost", { privacy: result });
    } else if (req.body.location.trim() == "") {
        req.flash('msg', 'Enter location!!!');
          return res.render("components/create/posts/createPost", { privacy: result });
    } else {
      next();
    }
  } catch (error) {
    logger.error("middleware validatePostForm: " + error);
  }
};

module.exports = validatePostForm;
