import React, { useState } from "react";
import Input1 from "../../../reusable-components/Input1";

function RankSearch({ field, setField }) {
  const [selectedValue, setSelectedValue] = useState(field); // Initial state

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setField(event.target.value);
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


	return (
		<div id="searchObj">
			<Input1 inputId={"search"} placeholder={targetText[field] || "Tìm kiếm"} />
      <select id="searchField" name="field" value={selectedValue} onChange={handleSelectChange}>
				{listObj.map((obj) => (
					<option  key={obj?.name} value={obj?.value}>
						{obj.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default RankSearch;
