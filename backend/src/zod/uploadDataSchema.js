const zod = require("zod");

const uploadDataSchema = zod.object({
	title: zod.string(),
	description: zod.string(),

	image: zod.string(),
	video: zod.string(),
});

module.exports = { uploadDataSchema };
