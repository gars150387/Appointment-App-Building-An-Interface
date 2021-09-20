import React from "react";

export const Dropdown = () => {
	return (
		<div className="dropdown">
			<button
				className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm dropdown-toggle"
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Sort By
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li>
					<a className="dropdown-item" href="#">
						Pt Name
					</a>
					<i className="fas fa-check" />
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Owner Name
					</a>
					<i className="fas fa-check" />
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Date
					</a>
					<i className="fas fa-check" />
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Asc
					</a>
					<i className="fas fa-check" />
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Des
					</a>
					<i className="fas fa-check" />
				</li>
			</ul>
		</div>
	);
};
