import React, { createContext, useReducer } from "react";
import "./Update.scss";
import Sidebar from "./Sidebar/Child/Sidebar/Sidebar";
import MainForm from "./Body/Child/Form/Container";

const initValues = {
	SIDEBAR_MAXWIDTH: `17vw`,
	sidebarVisible: true,
	searchValue: {},
	target: {id: "tv", title: "thành viên"},
};

export const UpdateContext = createContext(initValues);

function reducer(state, action) {
	let update = {};
	switch (action.type) {
		case "setSidebarVisible":
			update.sidebarVisible = action?.value || !state.sidebarVisible;
			break;

		case "setSearchValue":
			update.searchValue = { ...state.searchValue, ...action.value };
			break;

		case "setTarget":
			update.target = { ...state.target, ...action.value };
			break;

		default:
			throw new Error("WHAT THE FUCK AMIGO?");
	}

	return {...state, ...update}
}

function Update() {
	const [provider, dispatch] = useReducer(reducer, initValues);
	const proviAction = (type, value) => dispatch({type, value})

	const PROVIDER = {
		...provider,
		proviAction
	}

	return (
		<UpdateContext.Provider value={PROVIDER}>
			<div id="comp_Update" className="web_Component">
				<Sidebar />
				<div className="bodyContainer">
					<MainForm />
				</div>
			</div>
		</UpdateContext.Provider>
	);
}

export default Update;
