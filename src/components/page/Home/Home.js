import React from "react";
import "./Home.scss";
import { foundingDate } from "../../reusable-web-components";
import { ContainerNoticeElement, ContainerRankElement} from "./child/Container";

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
	return (
		<div className="bodyContainer">
			<ContainerNoticeElement></ContainerNoticeElement>
			<ContainerRankElement></ContainerRankElement>
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
