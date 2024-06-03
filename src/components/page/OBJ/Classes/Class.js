import React, { useState } from "react";
import Search from "../MainComponent/Search";
import Info from "../MainComponent/Info";
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

function Class() {
	const [isSearch, setIsSearch] = useState(true);
	const apiData = "/class";
	const [classData, setClassData] = useState({});
	const handleData = (obj) => {
		setClassData(obj);
		setIsSearch(false);
	};

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
			children: <FilGrade />,
		},
		{
			title: "Số thành viên",
			children: <FilMemberCount />,
		},
	];

	const infoForm = [
		{ title: "Lớp", value: classData?.name },
		{ title: "Năm học", value: classData?.studyYear },
		{ title: "Số lượng học sinh", value: classData?.totalStudent },
		{ title: "Tỉ lệ nam/ nữ", value: classData?.boyOnGirl },
		{ title: "Khối", value: classData?.field },
		{ title: "Chủ nhiệm", value: classData?.teacher },
		{ title: "Lớp trưởng", value: classData?.monitor },
		{ title: "Lớp phó", value: classData?.viceMonitor },
	];

	const advancedInfo = [
		{ title: "Danh sách học sinh", component: null },
		{ title: "Sơ đồ lớp", component: null },
		{ title: "Thi đua", component: null },
	];

	return (
		<div id="comp_Class" className="obj_Component web_Component">
			{isSearch ? (
				<Search
					handleData={handleData}
					placeholder={"Tìm kiếm lớp học"}
					apiData={apiData}
					icon={faPeopleRoof}
					filter_children={
						<FilterChoice title="Thông tin lớp học">
							{filterOption.map((obj, index) => (
								<FilterChoiceOption key={index} {...obj} />
							))}
						</FilterChoice>
					}
				></Search>
			) : (
				<Info
					setUpForm={infoForm}
					setUpNav={advancedInfo}
					name={classData?.name}
					avatar={null}
					role={classData?.role}
					fb={classData?.fb}
					ins={classData?.ins}
					setIsSearch={setIsSearch}
				/>
			)}
		</div>
	);
}

export default Class;
