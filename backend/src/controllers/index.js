const { Data } = require("../db");
const { uploadDataSchema } = require("../zod/uploadDataSchema");
const cloudinary = require("cloudinary").v2;

const uploadData = async (req, res) => {
	try {
		const body = req.body;

		const validateInput = uploadDataSchema.safeParse(body);
		if (!validateInput.success)
			return res.status(403).json({ msg: "Invalid inputs!!" });

		try {
			const imageResult = await cloudinary.uploader.upload(body.image, {
				folder: "test",
			});
			const videoResult = await cloudinary.uploader.upload(body.video, {
				folder: "test",
				resource_type: "video",
			});

			const data = await Data.create({
				title: body.title,
				description: body.description,
				image_url: imageResult.secure_url,
				video_url: videoResult.secure_url,
			});

			return res.json({ msg: "Data uploaded successfully!!", data });
		} catch (err) {
			return res.status(500).json({ msg: "Error while inserting data" });
		}
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error" });
	}
};

const getData = async (req, res) => {
	try {
		const data = await Data.find({});

		res.json({ msg: "Data retrived successfully!!", data });
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error!!" });
	}
};

const getVideo = async (req, res) => {
	try {
		const id = req.params.id;

		const video = await Data.findOne({ _id: id });

		return res.json({
			msg: "Video fetched successfully!!",
			videoUrl: video.video_url,
		});
	} catch (err) {
		return res.status(500).json({ msg: "Internal Server Error!!" });
	}
};

module.exports = { uploadData, getData, getVideo };
