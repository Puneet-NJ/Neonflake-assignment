import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			axios({
				method: "GET",
				url: "https://neonflake-assignment-be-0.onrender.com/api/v1/getData",
			}).then((response) => {
				setData(response.data.data);
			});
		}, 10000);

		axios({
			method: "GET",
			url: "https://neonflake-assignment-be-0.onrender.com/api/v1/getData",
		}).then((response) => {
			setData(response.data.data);
		});

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div className="w-4/5 mx-auto py-20">
			<h1 className="text-center text-3xl">Dashboard</h1>

			<div className="flex flex-wrap justify-evenly py-10 gap-20">
				{data.map((unit) => {
					return (
						<Link
							to={`/playVideo/${unit._id}`}
							key={unit._id}
							className="hover:scale-95 duration-150"
						>
							<img src={unit.image_url} className="w-[300px] h-52" />
							<div className="font-medium">{unit.title}</div>
							{/* <div>{unit.description}</div> */}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
