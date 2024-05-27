import React from "react";
import ParaChild from "./ParaChild";

function Para({title, listPara, icon}) {

	return (
		<div className="para container-element">
			<h3 className="title">
				{title} {icon}
			</h3>
			<div className="content">
				{listPara?.map((para, index) => <ParaChild key={`para-content_${index}`} title={para?.title} description={para?.description}/>)}
			</div>
		</div>
	);
}

export default React.memo(Para);
