import React from 'react'

function Details({ name, role }){
	return (
		<div className="box-text">
			<p id="obj-name">{name || ""}</p>
			<p id="obj-role">{role || "Không xác dịnh"}</p>
		</div>
	);
};

export default Details