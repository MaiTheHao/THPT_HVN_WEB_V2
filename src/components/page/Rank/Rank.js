import React, { useState } from "react";
import "./Rank.scss";
import HVNBANNER from "../../../pic/HVN_banner-trs.jpg";
import RankTable from "./child/RankTable";
import RankSearch from "./child/RankSearch";

function Rank() {
	const [field, setField] = useState("member");
	return (
		<div id="comp_Rank">
			<div id="rankContainer">
				<div className="HIDE_SCHOOL_ICON" id="UNDERICON">
					<img alt="under" src={HVNBANNER}></img>
				</div>
				<RankSearch field={field} setField={setField} />
				<RankTable field={field} />
			</div>
		</div>
	);
}

export default Rank;
