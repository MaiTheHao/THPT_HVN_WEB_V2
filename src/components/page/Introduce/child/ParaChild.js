import React from "react";

function ParaChild({id, title, description}) {
	return (
		<div className="para-child" id={id || null}>
			<div className="inner-title">{title || "Không có tiêu đề"}</div>
			<div className="inner-content">
				{description.map((lineData, index) => <p key={`Para_${index}`} className="lineData">-{lineData}</p>)}
			</div>
		</div>
	);
}

export default React.memo(ParaChild);
