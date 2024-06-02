import React, { createContext, useState } from "react";
import "./Update.scss";
import Sidebar from "./Sidebar/Child/Sidebar/Sidebar";

export const UpdateContext = createContext();

const SIDEBAR_MAXWIDTH = `17vw`;

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
						<h2 style={{color: "red"}}>DEV TABLE - SHOW STATUS</h2>
						<span>
							<strong>**Sidebar Visible:</strong> {sidebarVisible ? "Yes" : "No"}
							<br />
							<strong>**Search Value:</strong> {searchValue.value || "null"}
							<br/>
							<strong>**Sidebar Max Width:</strong> {SIDEBAR_MAXWIDTH}
						</span>
						<h2 style={{color: "yellowgreen"}}>THIS PAGE COMPONENT IN TEST</h2>
					</div>
				</div>
			</div>
		</UpdateContext.Provider>
	);
}

export default Update;
