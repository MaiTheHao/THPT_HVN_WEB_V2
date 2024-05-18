import React from "react";
import ParaChild from "./ParaChild";

function Para({icon}) {

	return (
		<div className="para container-element">
			<h3 className="title">
				PARA TITLE {icon}
			</h3>
			<div className="content">
				<ParaChild></ParaChild>
				<ParaChild></ParaChild>
				<ParaChild></ParaChild>
			</div>
		</div>
	);
}

export default Para;
