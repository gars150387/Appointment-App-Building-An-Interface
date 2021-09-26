import React from "react";
import appointmentList from "../data.json";

export const Counter = () => {
	return (
		<div className="card-body">
			{appointmentList !== 0 ? `Total Appointments: ${appointmentList.length}` : "No Appointments registered"}
		</div>
	);
};
