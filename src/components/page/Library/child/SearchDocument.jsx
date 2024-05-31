import React, { useState } from "react";
import Wrapper from "../../../Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchDocument() {
	const [selectField, setSelectField] = useState("Chọn lĩnh vực");
	const [visible, setVisible] = useState(false);

	const listFields = [{ name: "Lĩnh vực 1" }, { name: "Lĩnh vực 2" }, { name: "Lĩnh vực 3" }, { name: "Lĩnh vực 4" }];

	const handleSelectField = (e) => {
		setSelectField(e.currentTarget.innerText.trim());
		setVisible(false);
	};

	const ListSubject = ({ attrs }) => (
		<div className="selectField-container scrollY" {...attrs}>
			{listFields.map((field) => (
				<span key={field.name} onClick={handleSelectField}>
					{field.name}
				</span>
			))}
		</div>
	);
	return (
		<div id="searchDocument">
			<div id="searchForm" className="input_component">
				<input placeholder={"Tìm tài liệu"} />
				<FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => {}} />
			</div>
			<Wrapper buttonTitle={selectField} setState={setVisible} stateVisible={visible} ListRenderComponent={ListSubject} className="searchField"></Wrapper>
		</div>
	);
}

export default SearchDocument;
