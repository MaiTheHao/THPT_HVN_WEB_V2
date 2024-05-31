import React from "react";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";

function Blank() {
	return (
		<div id="BLANKPAGE" className="HIDE_SCHOOL_ICON">
			<img alt="none" src={HVNBANNER}></img>
		</div>
	);
}

export default React.memo(Blank);
