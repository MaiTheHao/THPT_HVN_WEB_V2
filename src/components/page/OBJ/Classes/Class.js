import React, { useState } from 'react'
import Search from "../MainComponent/Search";
import Info from '../MainComponent/Info';
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";

function Class() {
	const [isSearch, setIsSearch] = useState(true);
	const apiData = "/class";

	const FilGrade = () => (
		<select className="scrollY">
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
		</select>
	);

	const FilMemberCount = () => (
		<select className="scrollY">
			<option value="0-10">0-10</option>
			<option value="10-20">10-20</option>
			<option value="20-30">20-30</option>
			<option value="30-40">30-40</option>
			<option value=">40">{`>40`}</option>
		</select>
	);

	const filterOption = [
		{
			title: "Lĩnh vực",
			children: <FilGrade/>,
		},
		{
			title: "Số thành viên",
			children: <FilMemberCount/>,
		},
	];
	return (
		<div id="comp_Member" className="obj_Component">
			{isSearch ? (
				<Search apiData={apiData}>
					<FilterChoice title="Thông tin nhóm">
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

export default Class