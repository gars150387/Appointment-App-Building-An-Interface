import React from "react";
// import "../../styles/home.scss";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
import { AppointmentInfo } from "../component/AppointmentInfo";
import { AppointmentList } from "../component/AppointmentList";
import { element } from "prop-types";

export const Home = props => (
	<div className="container mt-3">
		<div className="row d-inline text-center">
			<h1 className="text-5xl font-thin ml-2">
				<i
					className="far fa-calendar-times inline-block text-danger align-center"
					style={{ marginRight: "10px" }}
				/>
				Appointment App
			</h1>
		</div>
		<AddAppointment />
		<Search className="mt-4" />
		<AppointmentInfo className="mt-2" />
	</div>
);
