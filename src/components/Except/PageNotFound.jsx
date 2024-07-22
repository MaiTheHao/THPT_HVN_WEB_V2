import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PageNotFound.scss";
import React from "react";

function PageNotFound() {
	return (
		<div id="PageNotFound">
			<h3 className="header">
				<span>PAGE NOT FOUND</span>
				<FontAwesomeIcon icon={faTriangleExclamation} />
			</h3>
		</div>
	);
}

export default PageNotFound;
