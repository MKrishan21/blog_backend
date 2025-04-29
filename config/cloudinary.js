const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

console.log("CloudinaryConfig", process.env.API_KEY);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blogs", // Specify the folder name in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "gif"], // Allowed file formats
  },
});

module.exports = {
  cloudinary,
  storage,
};
