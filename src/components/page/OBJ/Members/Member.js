import React, { useState } from "react";
import Search from "../MainComponent/Search";
import Info from "../MainComponent/Info";
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";
import UserGroups from "./UserGroups";
import UserRecentAct from "./UserRecentAct";
import "./Member.scss";
import Document from "./Document";

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

const FilBirth = () => {
	const listYearAcceptable = Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => 2000 + i);

	return (
		<select className="scrollY">
			{listYearAcceptable.reverse().map((year, index) => (
				<option key={`listYearAcceptable_${index}`} value={year}>
					{year}
				</option>
			))}
		</select>
	);
};

function Member() {
	const apiData = "/member";
	const [isSearch, setIsSearch] = useState(true);
	const [userData, setUserData] = useState({
		name: null,
		sex: null,
		birth: null,
		doanvien: null,
		email: null,
		phone: null,
	});
	const filterOption = [
		{
			title: "Giới tính",
			children: <FilGender />,
		},
		{
			title: "Đoàn viên",
			children: <FilDoanVien />,
		},
		{
			title: "Năm sinh",
			children: <FilBirth />,
		},
	];

	const handleData = (obj) => {
		setUserData(obj);
		setIsSearch(false);
	};

	const infoForm = [
		{ title: "Tên thành viên", value: userData?.name },
		{ title: "Giới tính", value: userData?.sex },
		{ title: "Ngày sinh", value: userData?.birth },
		{ title: "Đoàn viên", value: userData?.doanvien ? "Là đoàn viên" : "Không phải đoàn viên" },
		{ title: "Email", value: userData?.email },
		{ title: "Số điện thoại", value: userData?.phone },
	];

	const advancedInfo = [
		{ title: "Hoạt động gần đây", component: <UserRecentAct /> },
		{ title: "Nhóm", component: <UserGroups /> },
		{ title: "Tài liệu", component: <Document /> },
	];

	return (
		<div id="comp_Member" className="obj_Component">
			{isSearch ? (
				<Search
					handleData={handleData}
					apiData={apiData}
					filter_children={
						<FilterChoice title="Thông tin thành viên">
							{filterOption.map((obj, index) => (
								<FilterChoiceOption key={index} {...obj} />
							))}
						</FilterChoice>
					}
				></Search>
			) : (
				<Info setUpForm={infoForm} setUpNav={advancedInfo} name={userData?.name} avatar={null} role={userData?.role} fb={userData?.fb} ins={userData?.ins}/>
			)}
		</div>
	);
}

export default Member;
