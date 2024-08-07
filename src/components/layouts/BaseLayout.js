import React from "react";
import Header from "./part/Header";
import Footer from "./part/Footer";
import HVNICON from "../../pic/HVN_icon.jpg";
import SupportAI from "./SupportAI";

function BaseLayout({ id, sidebar=null, children }) {
	return (
		<div id={id} className="web_layout">
			<Header HVNICON={HVNICON} />
			<div id="webBody">
				{null || sidebar}
				<div id="webContent">
					{children}
					<Footer/>
				</div>
			</div>
			// <SupportAI/>
		</div>
	);
}

export default BaseLayout;
