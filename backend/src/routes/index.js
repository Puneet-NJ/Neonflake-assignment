const express = require("express");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const { uploadData, getData, getVideo } = require("../controllers");

dotenv.config({ path: "./.env" });

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

const route = express();

route.post("/uploadData", uploadData);
route.get("/getData", getData);
route.get("/getVideo/:id", getVideo);

module.exports = { route };
