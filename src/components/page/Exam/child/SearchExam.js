import React, { useState } from "react";
import Input1 from "../../../reusable-components/Input1";
import Wrapper from "../../../Wrapper/Wrapper";

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
				<span key={field.name} onClick={handleSelectField}>
					{field.name}
				</span>
			))}
		</div>
	);
	return (
		<div id="searchExam">
			<Input1 inputId={"search"} placeholder={"Tìm bài kiểm tra"} />
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
