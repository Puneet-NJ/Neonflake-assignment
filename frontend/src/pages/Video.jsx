import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Video = () => {
	const [videoUrl, setVideoUrl] = useState(null);
	const { id: videoId } = useParams();

	useEffect(() => {
		axios({
			url: `https://neonflake-assignment-be-0.onrender.com/api/v1/getVideo/${videoId}`,
			method: "GET",
		}).then((response) => {
			setVideoUrl(response.data.videoUrl);
		});
	}, []);

	if (!videoUrl) return;
	return (
		<div className="py-20 flex justify-center">
			<video src={videoUrl} controls autoPlay={true}>
				slk
			</video>
		</div>
	);
};

export default Video;
