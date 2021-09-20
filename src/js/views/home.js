import React from "react";
import "../../styles/home.scss";
import { BsCalendar } from "react-icons/bs";
import { Search } from "../component/Search";

export const Home = () => (
	<div className="container mx-auto mt-3 font-thin">
		<h1 className="text-5xl ml-2">
			<i className="far fa-calendar-times inline-block text-red-400 align-top mr-2" />
			Appointment App
		</h1>
		<Search />
	</div>
);
