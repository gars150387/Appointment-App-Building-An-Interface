import React, { useState, useEffect, useCallback } from "react";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
import { AppointmentInfo } from "../component/AppointmentInfo";
import appointmentList from "../data.json";

export const Home = props => {
	// const [appointmentList, setAppointmentList] = useState([]);

	// const fetchData = useCallback(() => {
	// 	fetch("../data.json")
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			setAppointmentList(data);
	// 		});
	// }, []);

	// useEffect(
	// 	() => {
	// 		fetchData();
	// 	},
	// 	[fetchData]
	// );

	return (
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
			<div>
				<h2 className="text-center bg-secondary bd-rounded-solid-1px mt-4">Appointment Information</h2>
			</div>
			<ul className="list-group lis-group-flush">
				{appointmentList.map(appointment => {
					console.log("appointment", appointment);
					return <AppointmentInfo className="mt-2" key={appointment.id} appointment={appointment} />;
				})}
			</ul>
		</div>
	);
};
