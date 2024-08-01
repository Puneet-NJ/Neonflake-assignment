import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
	const [image, setImage] = useState(null);
	const [video, setVideo] = useState(null);
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleImageUpload = (e) => {
		setImage(e.target.files[0]);
	};

	const handleVideoUpload = (e) => {
		setVideo(e.target.files[0]);
	};

	const handleSubmit = () => {
		if (!image || !video || !title || !description) return;

		setLoading(true);
		const reader = new FileReader();

		reader.onloadend = () => {
			const videoReader = new FileReader();

			videoReader.onloadend = () => {
				const videoBase64String = videoReader.result;
				const imageBase64String = reader.result;

				axios({
					url: "https://neonflake-assignment-be-0.onrender.com/api/v1/uploadData",
					method: "POST",
					data: {
						title,
						description,
						image: imageBase64String,
						video: videoBase64String,
					},
				}).then((res) => {
					setLoading(false);
					navigate("/");
				});
			};
			videoReader.readAsDataURL(video);
		};

		reader.readAsDataURL(image);
	};

	return (
		<div className="w-1/5 mx-auto py-20">
			<h1 className="text-center text-3xl">Upload the data</h1>

			<div className="flex flex-col py-10 gap-4">
				<input
					placeholder="Enter title"
					maxLength={50}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className="px-2 py-1 outline-none text-black"
				/>

				<div>
					<label htmlFor="desc">Enter description</label>
					<textarea
						id="desc"
						name="desc"
						maxLength={200}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						className="px-2 py-1 outline-none text-black"
					/>
				</div>

				<div>
					<label htmlFor="image">Upload Thumbnail</label>
					<input
						id="image"
						name="image"
						type="file"
						accept="image/png, image/jpg"
						onChange={handleImageUpload}
					/>
				</div>

				<div>
					<label htmlFor="video">Upload Video</label>
					<input
						id="video"
						name="video"
						type="file"
						accept="video/mp4, video/mpg, video/avi"
						onChange={handleVideoUpload}
					/>
				</div>

				<button
					onClick={handleSubmit}
					className="bg-white text-black py-2 mt-5 hover:scale-95 duration-150 hover:font-semibold"
				>
					Submit Data
				</button>

				{loading ? <>Loading...</> : <></>}
			</div>
		</div>
	);
};

export default Upload;
