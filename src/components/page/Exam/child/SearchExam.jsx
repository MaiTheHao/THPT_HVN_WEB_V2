import React, { useState } from "react";
import Wrapper from "../../../Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchExam() {
	const [selectField, setSelectField] = useState("Chọn môn học");
	const [visible, setVisible] = useState(false);

	const listFields = [
		{ name: "Toán" },
		{ name: "Vật lí" },
		{ name: "Hóa học" },
		{ name: "Sinh học" },
		{ name: "Tin học" },
		{ name: "Ngữ văn" },
		{ name: "Lịch sử" },
		{ name: "Địa lí" },
		{ name: "Ngoại ngữ" },
		{ name: "GDCD" },
		{ name: "Công nghệ" },
		{ name: "Thể dục" },
		{ name: "GDQP và an ninh" },
	];

	const handleSelectField = (e) => {
		setSelectField(e.currentTarget.innerText.trim());
		setVisible(false);
	}

	const ListSubject = ({ attrs }) => (
		<div className="selectField-container scrollY" {...attrs}>
			{listFields.map((field) => (
				<span className="element" key={field.name} onClick={handleSelectField}>
					{field.name}
				</span>
			))}
		</div>
	);
	return (
		<div id="searchExam">
			<div id="searchForm" className="input_component">
				<input placeholder="Tìm bài kiểm tra" />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<Wrapper
			buttonTitle={selectField}
			stateVisible={visible}
			setState={setVisible}
			ListRenderComponent={ListSubject}
			className = "searchField"
			></Wrapper>
		</div>
	);
}

export default React.memo(SearchExam);
