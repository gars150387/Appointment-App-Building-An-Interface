import React from "react";
import "../../styles/home.scss";
import { BsCalendar } from "react-icons/bs";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>
			<BsCalendar className="mr-1" />
			Appointment App
		</h1>
	</div>
);
