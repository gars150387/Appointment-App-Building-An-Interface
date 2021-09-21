import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Search = () => {
	const [toggleSearch, setToggleSearch] = useState(toggleSearch);
	return (
		<div className="container-fluid">
			<div className="col-12 mt-1 relative rounded-md shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<i className="col fas fa-search" />
					<label htmlFor="query" className="sr-only" />
				</div>
				<input
					type="text"
					name="query"
					id="query"
					value=""
					className="col-10 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
					placeholder="Search"
				/>
				<div className="absolute inset-y-0 right-0 flex items-center">
					<div>
						<button
							type="button"
							className="col justify-center bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center"
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
							onClick={() => setToggleSearch(!toggleSearch)}>
							Sort By <i className="fas fa-caret-down ml-2" />
						</button>
						{toggleSearch && <Dropdown />}
					</div>
				</div>
			</div>
		</div>
	);
};
