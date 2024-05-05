import React from "react";
import Header from "./part/Header";
import Footer from "./part/Footer";
import HVNICON from "../../pic/HVN_icon.jpg";

function BaseLayout({ id, sidebar=null, children }) {
	return (
		<div id={id}>
			<Header HVNICON={HVNICON} />
			<div id="webBody">
				{null || sidebar}
				<div id="webContent">
					{children}
					<Footer/>
				</div>
			</div>
		</div>
	);
}

export default BaseLayout;
