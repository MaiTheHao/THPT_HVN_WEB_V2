import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

function YourExam({exam}) {
	return (
		<a className="exam btn">
			<div className="exam-icon">
				<FontAwesomeIcon icon={faFileLines} />
			</div>
			<div className="exam-intro">
				<h5 className="examTitle">{exam?.title}</h5>
				<span className="examBirth">{exam?.birth}</span>
				<span className="examApp">{exam?.app}</span>
				<span className="examAuthor">{exam?.author}</span>
			</div>
		</a>
	);
}

export default YourExam;
