const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://lpuneetnj:nIn1LCCPR208KFSZ@cluster0.geefcdf.mongodb.net/Video-Streaming-Platform"
);

const Data = mongoose.model("Data", {
	title: String,
	description: String,

	image_url: String,
	video_url: String,
});

module.exports = {
	Data,
};
