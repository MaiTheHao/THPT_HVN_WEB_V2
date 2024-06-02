import React from 'react'
import HVNBANNER from "../../../../../../pic/HVN_banner-trs.jpg";

function Avatar({ avatar }){
	return (
		<div className="box-img">
			<img alt="none" src={avatar || HVNBANNER} />
		</div>
	);
};

export default Avatar