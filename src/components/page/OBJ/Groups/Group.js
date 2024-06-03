import React, { useState } from "react";
import Search from "../MainComponent/Search";
import Info from "../MainComponent/Info";
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function Group() {
	const [isSearch, setIsSearch] = useState(true);
	const apiData = "/group";
	const [groupData, setGroupData] = useState({});
	const handleData = (obj) => {
		setGroupData(obj);
		setIsSearch(false);
	};

	const FilField = () => (
		<select className="scrollY">
			<option value="">Các lĩnh vực</option>
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
			children: <FilField />,
		},
		{
			title: "Số thành viên",
			children: <FilMemberCount />,
		},
	];

	const infoForm = [
		{ title: "Tên nhóm", value: groupData?.name },
		{ title: "Ngày thành lập", value: groupData?.birth },
		{ title: "Số lượng thành viên", value: groupData?.totalMember },
		{ title: "Lãnh đạo", value: groupData?.monitor },
		{ title: "Lĩnh vực", value: groupData?.field },
		{ title: "mục tiêu", value: groupData?.goal },
	];

	const advancedInfo = [
		{ title: "Danh sách thành viên", component: null },
		{ title: "Hoạt động", component: null },
		{ title: "Thành tích", component: null },
	];

	return (
		<div id="comp_Group" className="obj_Component web_Component">
			{isSearch ? (
				<Search
					handleData={handleData}
					placeholder={"Tìm kiếm nhóm"}
					apiData={apiData}
					icon = {faPeopleGroup}
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
					name={groupData?.name}
					avatar={null}
					role={groupData?.role}
					fb={groupData?.fb}
					ins={groupData?.ins}
					setIsSearch={setIsSearch}
				/>
			)}
		</div>
	);
}

export default Group;
