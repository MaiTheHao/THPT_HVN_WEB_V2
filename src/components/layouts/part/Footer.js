import React from "react";
import { socialContactLinks } from "../../reusable-web-components";
import HVNICON from "../../../pic/HVN_icon.jpg";
import HVNBANNER from "../../../pic/HVN_banner-icon.jpg";
import "./Footer.scss";

function Content() {
	return (
		<div className="content footer-top__part">
			<div className="contact">
				<div className="des_content">
					<p>
						<strong>Địa chỉ:</strong>Tổ 4, Khu 4, Phường Uyên Hưng, TP.Tân Uyên, Bình Dương
					</p>
					<p>
						<strong>Điện thoại:</strong> 0274.365.6357
					</p>
					<p>
						<strong>Email:</strong>
						<a
							className="btn"
							href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hpthvnbinhduong@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							thpthvnbinhduong@gmail.com
						</a>
					</p>
				</div>
			</div>
			<div className="icons">
				<div className="des_content">
					<img src={HVNICON} alt="Logo Trường THPT Huỳnh Văn Nghệ"></img>
					<img src={HVNBANNER} alt="Banner Trường THPT Huỳnh Văn Nghệ"></img>
				</div>
			</div>
		</div>
	);
}

function Social() {
	return (
		<div className="social footer-top__part">
			{socialContactLinks.map(({ tag, props, children }, index) =>
				React.createElement(tag, { ...props, key: index }, children)
			)}
		</div>
	);
}

function Footer() {
	return (
		<div id="webFooter">
			<div id="webFooter-top">
				<Content />
				<Social />
			</div>
			<div className="line"></div>
			<div id="webFooter-bottom"></div>
		</div>
	);
}

export default React.memo(Footer);
