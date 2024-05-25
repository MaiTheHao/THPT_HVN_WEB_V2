import HVNBANNER from "../../../pic/HVN_banner-trs.jpg";
import React from "react";
import "./Library.scss";
import SearchDocument from "./child/SearchDocument";
import ListDocuments from "./child/ListDocuments";

function Library() {
	return (
		<div id="comp_Library">
			<div id="libraryContainer">
				<div className="HIDE_SCHOOL_ICON" id="UNDERICON">
					<img alt="under" src={HVNBANNER}></img>
				</div>
				<SearchDocument />
				<ListDocuments />
			</div>
		</div>
	);
}

export default React.memo(Library);
