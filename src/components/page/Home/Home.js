import React from "react";
import "./Home.scss";
import { foundingDate } from "../../reusable-web-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faRankingStar, faStar } from "@fortawesome/free-solid-svg-icons";

function HomeHeader() {
	const headerContext = {
		c1: "Trách nhiệm - Năng động - Sáng tạo",
		c2: "THPT HUỲNH VĂN NGHỆ",
		c3: `${foundingDate.total} năm - Một hành trình rạng rỡ, một tương lai rộng mở`,
	};
	const Title = ({ children }) => {
		return <div className="title">{children}</div>;
	};

	return (
		<div className="header">
			<Title>
				<span className="context">{headerContext.c1}</span>
				<h3 className="context">{headerContext.c2}</h3>
				<span className="context">{headerContext.c3}</span>
			</Title>
		</div>
	);
}

function Container() {
	const classRanks = [
		{ name: "12.9", score: 300 },
		{ name: "10.10", score: 299 },
		{ name: "12.11", score: 298 },
		{ name: "11.8", score: 297 },
		{ name: "10.4", score: 296 },
		{ name: "12.10", score: 295 },
		{ name: "10.8", score: 294 },
		{ name: "12.6", score: 293 },
		{ name: "10.3", score: 292 },
		{ name: "11.9", score: 291 },
		{ name: "11.4", score: 290 },
		{ name: "12.5", score: 289 },
		{ name: "10.9", score: 288 },
		{ name: "11.2", score: 287 },
		{ name: "11.10", score: 286 },
		{ name: "10.11", score: 285 },
		{ name: "10.7", score: 284 },
		{ name: "12.2", score: 283 },
		{ name: "11.7", score: 282 },
		{ name: "11.1", score: 281 },
		{ name: "12.7", score: 280 },
		{ name: "10.1", score: 279 },
		{ name: "12.8", score: 278 },
		{ name: "11.5", score: 277 },
		{ name: "10.5", score: 276 },
		{ name: "12.3", score: 275 },
		{ name: "11.6", score: 274 },
		{ name: "12.1", score: 273 },
		{ name: "10.2", score: 272 },
		{ name: "11.3", score: 271 },
		{ name: "10.6", score: 270 },
		{ name: "12.4", score: 269 },
	];

	const groupRanks = [
		{ name: "Tuổi Trẻ Huỳnh Văn Nghệ", score: 300 },
		{ name: "Học Bá Tứ Hùng", score: 245 },
		{ name: "Dân Chơi Học Vần", score: 215 },
		{ name: "Băng Hậu Chém Gió", score: 200 },
		{ name: "F4 Học Đường", score: 189 },
		{ name: "Thánh Nhây Hội", score: 188 },
		{ name: "Chuyên Gia Chém Gió", score: 165 },
		{ name: "Bà Tám Học Đường", score: 155 },
		{ name: "Hội Chị Em Cà Khịa", score: 143 },
		{ name: "Bộ Ba Siêu Quậy", score: 133 },
		{ name: "Đội Quân Bánh Bao", score: 130 },
		{ name: "Hội Chim Sẻ Dưới Mái Hiên", score: 124 },
		{ name: "Cánh Hoa Dạ Quỳnh", score: 120 },
		{ name: "Bầy Ong Chăm Chỉ", score: 116 },
		{ name: "Hội Những Người Mơ Mộng", score: 114 },
		{ name: "Đội Quân Bất Bại", score: 107 },
	];

	const listContainer = [
		{
			type: "rank",
			id: "rank_classes",
			headName: "lớp",
			title: "XẾP HẠNG LỚP",
			inputIcon: faRankingStar,
			listObj: classRanks,
		},
		{
			type: "rank",
			id: "rank_students",
			headName: null,
			title: "XẾP HẠNG HỌC SINH",
			inputIcon: faRankingStar,
			listObj: null,
		},
		{
			type: "rank",
			id: "rank_groups",
			headName: null,
			title: "XẾP HẠNG NHÓM",
			inputIcon: faRankingStar,
			listObj: groupRanks,
		},
	];

	const CreateListRank = ({ headName, listObj }) => {
		return (
			<ul>
				{listObj?
				(listObj.map(({ name, score }, index) => (
					<li key={index} className={`top ${index < 3 ? "top" + (index + 1) : "none"}`}>
						<div>
							<FontAwesomeIcon icon={index < 3 ? faCrown : faStar} />
							<h4>{`TOP ${index + 1}`}</h4>
							<FontAwesomeIcon icon={index < 3 ? faCrown : faStar} />
						</div>
						<span className="rank__name">{`${headName ? headName.toUpperCase() + " " : ""}${name}`}</span>
						<span className="rank__score">ĐIỂM: {score}</span>
					</li>
				)))
				:
				(<h4>...NO DATA...</h4>)
				}
			</ul>
		);
	};

	const ContainerElement = ({ id, inputIcon, title, children }) => {
		return (
			<div className="container-child" id={id}>
				<div className="child__header">
					<FontAwesomeIcon className="rankIcon" icon={inputIcon} />
					<h3>{title}</h3>
				</div>
				<div className="child__body">{children}</div>
			</div>
		);
	};

	return (
		<div className="bodyContainer">
			{listContainer.map(({ type, id, headName, inputIcon, title, listObj }) => (
				<ContainerElement key={id} id={id} inputIcon={inputIcon} title={title}>
					{type === "rank" ? <CreateListRank headName={headName} listObj={listObj} /> : null}
				</ContainerElement>
			))}
		</div>
	);
}

function Home() {
	return (
		<div id="comp_Home">
			<HomeHeader />
			<div className="body">
				<Container />
			</div>
		</div>
	);
}

export default React.memo(Home);

// 62 năm - Một hành trình rạng rỡ, một tương lai rộng mở
// THPT HUỲNH VĂN NGHỆ
// Trách nhiệm - Năng động - Sáng tạo
