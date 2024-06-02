import React from "react";
import { Link } from "react-router-dom";

function Content() {
	return (
		<div className="body">
			<div className="content-element">
				<h3 className="element-title">Xin chào</h3>
				<Link to="hello" className="element-link">
					link here
				</Link>
				<Link to="hello" className="element-link">
					link here
				</Link>
				<Link to="hello" className="element-link">
					link here
				</Link>
				<Link to="hello" className="element-link">
					link here
				</Link>
				<Link to="hello" className="element-link">
					link here
				</Link>
				<Link to="hello" className="element-link">
					link here
				</Link>
			</div>
		</div>
	);
}

export default Content;
