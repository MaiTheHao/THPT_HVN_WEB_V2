import React from "react";
import HVNBANNER from "../../../../pic/HVN_banner-icon.jpg";
import HVNICON from "../../../../pic/HVN_icon.jpg";
import Context from "./Context";

// listContext: type, icon, dataStruct

function Container({title, listContext}) {
	return (
		<div className="Introduce-container">
			<div className="container-header">
				<img alt="lefticon" src={HVNBANNER}></img>
				<h2>{title}</h2>
				<img alt="righticon" src={HVNICON}></img>
			</div>
			<div className="container-body">
				{listContext.map((context, index) => <Context key={`IntroduceContainerBody_${index}`} {...context}/>)}
			</div>
		</div>
	);
}

export default Container;
