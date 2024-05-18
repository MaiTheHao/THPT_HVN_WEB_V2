import React from "react";
import HVNBANNER from "../../../pic/HVN_banner-trs.jpg";
import "./Exam.scss";
import SearchExam from "./child/SearchExam";
import ListExams from "./child/ListExams";

function Exam() {

	return (
		<div id="comp_Exam">
			<div id="examContainer">
				<div className="HIDE_SCHOOL_ICON" id="UNDERICON">
					<img alt="under" src={HVNBANNER}></img>
				</div>
                <SearchExam/>
				<ListExams/>
			</div>
		</div>
	);
}

export default React.memo(Exam);
