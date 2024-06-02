import React from "react";

const ObjProp = ({ title, value }) => (
	<div className="ObjProp">
		<h5>{title || null}</h5>
		<p>{value || null}</p>
	</div>
);

export default ObjProp;