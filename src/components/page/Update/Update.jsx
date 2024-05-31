import React, { createContext, useState } from "react";
import "./Update.scss";
import Sidebar from "./Sidebar/Child/Sidebar/Sidebar";

export const UpdateContext = createContext();

const SIDEBAR_MAXWIDTH = `15vw`;

function Update() {
	const [sidebarVisible, setSidebarVisible] = useState(true);
	const [searchValue, setSearchValue] = useState({ value: "" });

	const provider = {
		sidebarVisible,
		setSidebarVisible,
		SIDEBAR_MAXWIDTH,
		obj: null,
		searchValue,
		setSearchValue,
	};
	return (
		<UpdateContext.Provider value={provider}>
			<div id="comp_Update">
				<Sidebar />
				<div className="bodyContainer">
					<div className="content">
						<h2>DEV TABLE - SHOW STATUS</h2>
						<span>
							**Sidebar Visible:** {sidebarVisible ? "Yes" : "No"}
							<br />
							**Search Value:** {searchValue.value}
						</span>
					</div>
				</div>
			</div>
		</UpdateContext.Provider>
	);
}

export default Update;
