import React, { useRef, useState } from "react";
// import { Search, Info, FilterChoice, FilterChoiceOption, listYearAcceptable } from "../MainComponent";
import Search from "../MainComponent/Search";
import Info from '../MainComponent/Info';
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";
import "./Member.scss";

function Member() {
	const [isSearch, setIsSearch] = useState(true);
	const listYearAcceptable = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => 2000 + i);
	const apiData = "/member";
	const FilGender = () => (
		<select className="scrollY">
			<option value="nam">Nam</option>
			<option value="nu">Nữ</option>
		</select>
	);
	const FilDoanVien = () => (
		<select className="scrollY">
			<option value="co">Là đoàn viên</option>
			<option value="khong">Không phải đoàn viên</option>
		</select>
	);
	const FilBirth = () => (
		<select className="scrollY">
			{listYearAcceptable.reverse().map((year, index) => (
				<option key={year + index} value={year}>{year}</option>
			))}
		</select>
	);
	const filterOption = [
		{
			title: "Giới tính",
			children: <FilGender/>,
		},
		{
			title: "Đoàn viên",
			children: <FilDoanVien/>,
		},
		{
			title: "Năm sinh",
			children: <FilBirth/>,
		},
	];
	return (
		<div id="comp_Member" className="obj_Component">
			{isSearch ? (
				<Search apiData={apiData}>
					<FilterChoice title="Thông tin thành viên">
						{filterOption.map((obj, index) => (
							<FilterChoiceOption key={index} {...obj} />
						))}
					</FilterChoice>
				</Search>
			) : (
				<Info />
			)}
		</div>
	);
}

export default Member;
