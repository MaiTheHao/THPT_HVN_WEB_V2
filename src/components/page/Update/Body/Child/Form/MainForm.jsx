import React from "react";
import "./Form.scss";

function MainForm({ target, children }) {
	return (
		<div className="form-box">
			<h2 className="form-header">
				<div className="title">
					<h2 className="main">CẬP NHẬT THÔNG TIN {target?.title.toUpperCase()}</h2>
					<span className="description">NO.092846142</span>
				</div>
			</h2>
			<div className="form-input"></div>
		</div>
	);
}

export default MainForm;
