import React, { useState } from "react";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Avatar = ({ avatar }) => {
	return (
		<div className="box-img">
			<img alt="none" src={avatar || HVNBANNER} />
		</div>
	);
};

const Details = ({ name, role }) => {
	return (
		<div className="box-text">
			<p id="obj-name">{name || ""}</p>
			<p id="obj-role">{role || "Không xác dịnh"}</p>
		</div>
	);
};

const ObjProp = ({ title, value }) => (
	<div className="ObjProp">
		<h5>{title || null}</h5>
		<p>{value || null}</p>
	</div>
);

const ContainerInfo = ({ avatar, name, role, setUpForm }) => {
	return (
		<div id="container-info" className="container">
			<div className="container-left">
				<Avatar avatar={avatar} />
				<Details name={name} role={role} />
			</div>
			<div className="container-right">
				{setUpForm.map((obj) => (
					<ObjProp key={obj.id || Math.random()} {...obj} />
				))}
			</div>
		</div>
	);
};

function Info({ setUpForm, setUpNav, avatar, name, role, fb, ins, email, setIsSearch }) {
	const [advancedPage, setAdvancedPage] = useState(null);
	return (
		<div id="infoObjForm">
			<ContainerInfo setUpForm={setUpForm} avatar={avatar || HVNBANNER} name={name} role={role} />

			<div id="container-advanced" className="container">
				<div className="container-left">
					{!fb && !ins ? (
						<p>Không có liên kết MXH</p>
					) : (
						<>
							{fb ? (
								<a target="_blank" rel="noreferrer" href={fb} className="fb btn">
									<FontAwesomeIcon icon={faSquareFacebook} />
									<span>Facebook</span>
								</a>
							) : null}
							{ins ? (
								<a target="_blank" rel="noreferrer" href={ins} className="ins btn">
									<FontAwesomeIcon icon={faSquareInstagram} />
									<span>Instagram</span>
								</a>
							) : null}
							{email ? (
								<a target="_blank" rel="noreferrer" href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`} className="email btn">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>Email</span>
								</a>
							) : null}
						</>
					)}
				</div>
				<div className="container-right">
					<div id="container-right-navbar" className="scrollX">
						{setUpNav.map((e, index) => (
							<React.Fragment key={`container-advanced-right-navbar_${index}`}>
								{e?.accept === role || !e?.accept ? (
									<button
										onClick={() => setAdvancedPage(e?.component)}
									>
										{e?.title}
									</button>
								) : null}
							</React.Fragment>
						))}
					</div>
					<div id="container-right-context">{advancedPage ? advancedPage : null}</div>
				</div>
			</div>

			<button id="infoObjFormReturn" onClick={() => setIsSearch(true)}>
				QUAY LẠI TÌM KIẾM
			</button>
		</div>
	);
}

export { ObjProp };
export default React.memo(Info);
