import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { SearchObjContext } from './Search'; 

function Form({ apiData }) {
	const TEST = true;
	const container = { placeholder: "Tìm kiếm", icon: faMagnifyingGlass };

	const { setResults } = useContext(SearchObjContext);
	const [searchName, setSearchName] = useState("");

	const searchObj = (inputName, listObj) => {
		const found =
			inputName.length > 0
				? listObj.filter((user) => user.name.toLowerCase().trim().includes(inputName.toLowerCase().trim()))
				: [];
		setResults(found);
	};

	const handleSearch = async (e) => {
		const inputValue = e.target.value;
		setSearchName(inputValue);

		if (!TEST) {
			try {
				const {
					data: { listObj },
				} = await axios.get(`/searchObj${apiData}`, {
					params: { inputValue: inputValue },
				});
				// Update UI or perform actions with listObj
			} catch (error) {
				console.error("Error fetching data:", error);
				// Display error message to the user (optional)
			}
		} else {
			// TEST SEARCH
			if (apiData === "/member") {
				searchObj(inputValue, [
					{class: "12.11",role: "Học sinh",type:"Cá nhân", name: "Nguyễn Văn An", id: "01" },
					{class: null,role: "Cán bộ",type:"Cá nhân", name: "Trần Thị Bình", id: "02" },
					{class: null,role: "Giáo viên",type:"Cá nhân", name: "Lê Văn Cường", id: "03" },
					{class: "10.7",role: "học sinh",type:"Cá nhân", name: "Phạm Thị Dũng", id: "04" },
				]);
			} else {
				if (apiData === "/group") {
					searchObj(inputValue, [
						{role: "Nhóm thuộc quyền quản lí của nhà trường",type:"Nhóm", name: "Tuổi Trẻ Huỳnh Văn Nghệ", score: 300, id: "05" },
						{role: "Nhóm thuộc quyền quản lí của nhà trường",type:"Nhóm", name: "Học Bá Tứ Hùng", score: 245, id: "06" },
						{role: null,type:"Nhóm", name: "Dân Chơi Học Vần", score: 215, id: "07" },
						{role: null,type:"Nhóm", name: "Băng Hậu Chém Gió", score: 200, id: "63" },
						{role: null,type:"Nhóm", name: "F4 Học Đường", score: 189, id: "124" },
						{role: null,type:"Nhóm", name: "Thánh Nhây Hội", score: 188, id: "1231" },
						{role: null,type:"Nhóm", name: "Chuyên Gia Chém Gió", score: 165, id: "42" },
						{role: null,type:"Nhóm", name: "Bà Tám Học Đường", score: 155, id: "11" },
						{role: null,type:"Nhóm", name: "Hội Chị Em Cà Khịa", score: 143, id: "22" },
						{role: null,type:"Nhóm", name: "Bộ Ba Siêu Quậy", score: 133, id: "421" },
					]);
				} else {
					if (apiData === "/class") {
						searchObj(inputValue, [
							{type:"Lớp", name: "12.9", score: 300, id: "42" },
							{type:"Lớp", name: "10.10", score: 299, id: "1" },
							{type:"Lớp", name: "12.11", score: 298, id: "52" },
							{type:"Lớp", name: "11.8", score: 297, id: "12" },
							{type:"Lớp", name: "10.4", score: 296, id: "1124" },
							{type:"Lớp", name: "12.10", score: 295, id: "1242" },
							{type:"Lớp", name: "10.8", score: 294, id: "112" },
							{type:"Lớp", name: "12.6", score: 293, id: "22" },
							{type:"Lớp", name: "11.9", score: 291, id: "332" },
							{type:"Lớp", name: "10.3", score: 292, id: "11" },
						]);
					}
				}
			}
		}
	};

	return (
		<form>
			<div>
				<input
					type="text"
					onChange={handleSearch}
					value={searchName}
					placeholder={container.placeholder}
				></input>
				<FontAwesomeIcon icon={container.icon} />
			</div>
		</form>
	);
}

export default Form