import React, { useState } from "react";
import Input1 from "../../../reusable-components/Input1";
import Wrapper from "../../../Wrapper/Wrapper";

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
			<Input1 inputId={"search"} placeholder={"Tìm tài liệu"} />
			<Wrapper buttonTitle={selectField} setState={setVisible} stateVisible={visible} ListRenderComponent={ListSubject} className="searchField"></Wrapper>
		</div>
	);
}

export default SearchDocument;
