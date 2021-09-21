import React from "react";

export const Modal = () => {
	return (
		<>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Are you sure to delete this Appointment?
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">...</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() => onclose()}>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Sure, delete it!
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* // trigger Modal// */}
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Launch demo modal
			</button>
		</>
	);
};
