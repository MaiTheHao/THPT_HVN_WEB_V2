import React from "react";
import Input1 from "../../../reusable-components/Input1";

function SearchExam() {
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
	return (
		<div id="searchExam">
			<Input1 inputId={"search"} placeholder={"Tìm bài kiểm tra"} />
			<select id="searchField">
				<option value="">Chọn môn học</option>
				{listFields.map((field) => (
					<option key={field.name} value={field.name}>
						{field.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default SearchExam;
