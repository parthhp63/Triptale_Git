const fs = require("fs");
const path = require("path");
const logger = require("../../config/logger");
const conn = require("../../config/mysql_connection");

const number  = {
  jpg: Buffer.from([0xFF,0xD8,0xFF,0xE0]),
  jpeg: Buffer.from([0xFF,0xD8,0xFF,0xE0]),
  png:Buffer.from([0x89,0x50,0x4E,0x47]),
  gif:Buffer.from([0x47,0x49,0x46,0x38]),
  webp:Buffer.from([0x52,0x49,0x46,0x46]),
  mp4:Buffer.from([0x00,0x00,0x00,0x20])
}

const protectEventImage =async (req,res,next)=>{
  try {
    let isValidate = true;
  
      console.log(req.file)
  //   const validate = fs.readFileSync(item.path);
  //     if (!validate.slice(0,4).equals(number[item.path.split(".").pop()])) {
  //       isValidate = false;
  //       req.files.forEach((file) => {
  //         fs.unlinkSync(file.path);
  //       });
  //     }
  // })

  // if (!isValidate) {
  //      const privacyQuery = "select * from privacy";
  //       const [result] = await conn.query(privacyQuery);
  //       if(req.path == "/insertPost"){
  //         req.flash('msg', 'Warning....!!  You try to insert Mulfunctional File');
  //         return res.render("components/create/posts/createPost", { privacy: result });
  //       }
  // }
  // next()
  } catch (error) {
    logger.error(error)
  }
}

module.exports = protectEventImage;