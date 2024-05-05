import React from "react";
import "./Home.scss";
import { foundingDate } from "../../reusable-web-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faRankingStar } from "@fortawesome/free-solid-svg-icons";

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

function Home() {
	return (
		<div id="comp_Home">
			<HomeHeader />
			<div className="body">
				<div className="bodyContainer">
					<div className="container-child">
						<div className="child__header" id="rank_students">
							<FontAwesomeIcon className="rankIcon" icon={faRankingStar} />
							<h3>XẾP HẠNG HỌC SINH</h3>
						</div>
						<div className="child__body">
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
					<div className="container-child" id="rank_classes">
						<div className="child__header">
							<FontAwesomeIcon className="rankIcon" icon={faRankingStar} />
							<h3>XẾP HẠNG LỚP HỌC</h3>
						</div>
						<div className="child__body">
							<ul>
								<li className="top top1"><FontAwesomeIcon icon={faCrown} /><span>LỚP 1</span><FontAwesomeIcon icon={faCrown} /></li>
								<li className="top top2"><FontAwesomeIcon icon={faCrown} /><span>LỚP 1</span><FontAwesomeIcon icon={faCrown} /></li>
								<li className="top top3"><FontAwesomeIcon icon={faCrown} /><span>LỚP 1</span><FontAwesomeIcon icon={faCrown} /></li>
								<li>LOP1</li>
							</ul>
						</div>
					</div>
					<div className="container-child" id="rank_groups">
						<div className="child__header">
							<FontAwesomeIcon className="rankIcon" icon={faRankingStar} />
							<h3>XẾP HẠNG NHÓM</h3>
						</div>
						<div className="child__body">
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Home);

// 62 năm - Một hành trình rạng rỡ, một tương lai rộng mở
// THPT HUỲNH VĂN NGHỆ
// Trách nhiệm - Năng động - Sáng tạo
