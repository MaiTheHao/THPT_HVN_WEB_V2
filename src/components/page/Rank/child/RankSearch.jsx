import React, { useState } from "react";
import Wrapper from "../../../Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function RankSearch({ field, setField }) {
	const [selectedValue, setSelectedValue] = useState("Thành viên"); // Initial state
	const [visible, setVisible] = useState(false);

	const handleSelectChange = (event) => {
		const value = event.target.id;
		setSelectedValue(event.currentTarget.innerText.trim());
		setField(value);
		setVisible(false);
	};

	const targetText = {
		member: "Tìm kiếm thành viên",
		group: "Tìm kiếm nhóm",
		class: "Tìm kiếm lớp",
	};

	const listObj = [
		{ name: "Thành viên", value: "member" },
		{ name: "Nhóm", value: "group" },
		{ name: "Lớp học", value: "class" },
		{ name: "Học sinh", value: "student" },
	];

	const ListObjType = ({ attrs }) => (
		<div {...attrs} className="selectField-container scrollY">
			{listObj.map((obj) => (
				<span onClick={(e) => handleSelectChange(e)} key={obj?.name} id={obj?.value}>
					{obj.name}
				</span>
			))}
		</div>
	);

	return (
		<div id="searchObj">
			<div id="searchForm" className="input_component">
				<input placeholder={targetText[field] || "Tìm kiếm"} />
				<FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => {}} />
			</div>
			<Wrapper buttonTitle={selectedValue} setState={setVisible} stateVisible={visible} ListRenderComponent={ListObjType} className="searchField"></Wrapper>
		</div>
	);
}

export default RankSearch;
