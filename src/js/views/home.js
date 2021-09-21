import React from "react";
import "../../styles/home.scss";
import { BsCalendar } from "react-icons/bs";
import { Search } from "../component/Search";
import { AddAppointment } from "../component/AddAppointment";
import { appointmentList } from "../../data.json";

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

		<ul>
			{appointmentList.map(appointment, index => (
				<li className="px-3 py-3 flex items-start" key={index}>
					<button
						type="button"
						className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						<i className="fas fa-trash" />
					</button>
					<div className="flex-grow">
						<div className="flex items-center">
							<span className="flex-none font-medium text-2xl text-blue-500">petName</span>
							<span className="flex-grow text-right">aptDate</span>
						</div>
						<div>
							<b className="font-bold text-blue-500">Owner:</b> ownerName
						</div>
						<div className="leading-tight">aptNotes</div>
					</div>
				</li>
			))}
		</ul>
	</div>
);
