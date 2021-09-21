import React from "react";

export const Dropdown = () => {
	return (
		<div
			className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
			<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
				<div
					className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
					role="menuitem">
					Pet Name <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
					role="menuitem">
					Owner Name <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
					role="menuitem">
					Date <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
					role="menuitem">
					Asc <i className="fas fa-check" />
				</div>
				<div
					className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
					role="menuitem">
					Desc <i className="fas fa-check" />
				</div>
			</div>
		</div>
	);
};
