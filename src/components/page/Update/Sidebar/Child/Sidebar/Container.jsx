import React from "react";
import HotBar from "./Child/HotBar";
import Content from "./Child/Content";

function Container() {
	return (
		<div className="container scrollY paddingBottom">
			<HotBar />
			<Content />
		</div>
	);
}

export default Container;
