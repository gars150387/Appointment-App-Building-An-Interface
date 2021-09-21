import React from "react";
// import "../../styles/home.scss";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
import { AppointmentList } from "../component/AppointmentList";

export const Home = () => (
	<div className="container mx-auto mt-3">
		<div className="row inline">
			<h1 className="text-5xl ml-2 font-thin">
				<div>
					<i className="far fa-calendar-times inline-block text-red-400 align-top mr-4" />
				</div>
				Appointment App
			</h1>
		</div>
		<AddAppointment />
		<Search />
		<AppointmentList className="mt-2" />
	</div>
);
