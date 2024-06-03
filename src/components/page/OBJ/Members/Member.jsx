import React, { useState } from "react";
import Search from "../MainComponent/Search";
import Info from "../MainComponent/Info";
import { FilterChoice, FilterChoiceOption } from "../MainComponent/Filter";
import UserGroups from "./UserGroups";
import UserRecentAct from "./UserRecentAct";
import "./Member.scss";
import Document from "./Document";
import useAppContext from "../../../../Context/UseAppContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

function Member() {
	const { auth } = useAppContext();
	const apiData = "/member";
	const [isSearch, setIsSearch] = useState(!auth?.loginsuccess);
	const [userData, setUserData] = useState({
		name: auth?.userName,
		sex: auth?.userSex,
		birth: auth?.userBirth,
		doanvien: auth?.userDoanVien,
		email: auth?.userEmail,
		phone: auth?.userPhone,
		role: auth?.userRole,
		fb: auth?.userFb,
		ins: auth?.userIns,
	});

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

	const filterOption = [
		{ title: "Giới tính", children: <FilGender /> },
		{ title: "Đoàn viên", children: <FilDoanVien /> },
		{ title: "Năm sinh", children: <FilBirth /> },
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
		{ title: "Bảng điểm", component: <ScoreBoard />, accept: "Học sinh" },
		{ title: "Tài liệu", component: <Document />, accept: "Học sinh" },
	];

	return (
		<div id="comp_Member" className="obj_Component web_Component">
			{isSearch ? (
				<Search
					handleData={handleData}
					placeholder={"Tìm kiếm thành viên"}
					icon={faUser}
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
				<Info
					setUpForm={infoForm}
					setUpNav={advancedInfo}
					name={userData?.name}
					avatar={null}
					role={userData?.role}
					fb={userData?.fb}
					ins={userData?.ins}
					email={userData?.email}
					setIsSearch={setIsSearch}
				/>
			)}
		</div>
	);
}

export default Member;
