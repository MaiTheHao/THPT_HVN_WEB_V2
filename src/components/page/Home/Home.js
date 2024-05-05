import React from "react";
import "./Home.scss";
import { foundingDate } from "../../reusable-web-components";

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
						<div className="child__header">
							<h3>CHILD HEADER</h3>
						</div>
						<div className="child__body">
							<p>CHILD BODY</p>
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
