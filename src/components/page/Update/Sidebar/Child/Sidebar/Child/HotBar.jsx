import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useUpdateContext from "../../../../useUpdateContext";
import { faCircleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function HotBar() {
	const { sidebarVisible, setSidebarVisible, searchValue, setSearchValue } = useUpdateContext();

	const handleSubmit = (value) => {
		setSearchValue({ ...searchValue, value: value });
	};

	const ExitBtn = () => (
		<button className="exitBtn sidebarActionBtn">
			<FontAwesomeIcon icon={faCircleRight} onClick={() => setSidebarVisible(!sidebarVisible)} />
		</button>
	);
	return (
		<div className="hotbar">
		
				<div id="searchForm" className="input_component">
					<input placeholder="Tìm kiếm" onChange={(e) => handleSubmit(e.target.value)} />
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						onClick={() => {
						}}
					/>
				</div>
		
			<ExitBtn />
		</div>
	);
}

export default HotBar;
