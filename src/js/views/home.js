import React from "react";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
// import { AppointmentInfo } from "../component/AppointmentInfo";
import appointmentList from "../data.json";

export const Home = props => {
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
			{/* <AppointmentInfo className="mt-2" /> */}

			<ul className="list-group lis-group-flush">
				{appointmentList.map(appointment => {
					console.log("appointment", appointment);
					return (
						<div key={appointment.id}>
							<button
								type="button"
								className="p-1.5 mr-1.5 mt-1 rounded text-white bg-danger-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								<i className="fas fa-trash" />
							</button>
							<li className="list-group-item">
								<b>Pet: </b>
								{appointment.petName}
							</li>
							<li className="list-group-item">
								<b>Date: </b>
								{appointment.aptDate}
							</li>
							<li className="list-group-item">
								<b>Owner: </b>
								{appointment.ownerName}
							</li>
							<li className="list-group-item">
								<b>Notes: </b>
								{appointment.aptNotes}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
