import React, { useState } from "react";
import { AppointmentList } from "./AppointmentList";

export const AppointmentInfo = () => {
	const [togglerAppointmentInfo, setTogglerAppointmentInfo] = useState(togglerAppointmentInfo);

	return (
		<>
			<button
				className="col-12 mt-4 mb-0 bg-primary"
				onClick={() => setTogglerAppointmentInfo(!togglerAppointmentInfo)}>
				<b>Appointments Information</b>
			</button>
			{togglerAppointmentInfo && <AppointmentList />}
		</>
	);
};
