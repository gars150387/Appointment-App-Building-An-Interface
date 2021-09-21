import React, { useContext } from "react";
import { Data } from "../component/Data";
import { Context } from "../store/appContext";
// import $ from "jquery";
// import Popper from "popper.js";
// import "bootstrap/dist/js/bootstrap.bundle.min";

export const AppointmentList = () => {
	const { store } = useContext(Context);
	return (
		<ul className="divide-y divide-gay-200">
			{store.appointmentList &&
				appointmentList.map(element => (
					<li className="px-3 py-3 flex items-start" key={index}>
						<button
							type="button"
							className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
							<i className="fas fa-trash" />
						</button>
						<div className="flex-grow">
							<div className="flex items-center">
								<span className="flex-none font-medium text-2xl text-blue-500">{element.petName}</span>
								<span className="flex-grow text-right">{element.aptDate}</span>
							</div>
							<div>
								<b className="font-bold text-blue-500">Owner:</b> {element.ownerName}
							</div>
							<div className="leading-tight">{element.aptNotes}</div>
						</div>
					</li>
				))}
		</ul>
	);
};
