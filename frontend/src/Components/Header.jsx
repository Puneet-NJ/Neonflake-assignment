import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="w-full flex justify-center py-5 bg-neutral-500 text-xl font-medium gap-10">
			<Link to="/upload" className="hover:scale-110 duration-150">
				Upload Data
			</Link>
			<Link to="/" className="hover:scale-110 duration-150">
				Dashboard
			</Link>
		</div>
	);
};

export default Header;
