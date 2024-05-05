import React, { useState } from "react";
import { Link } from "react-router-dom";
import USRAVT from "../../../pic/userPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { socialContactLinks } from "../../reusable-web-components";
import "./Header.scss";
import useAppContext from "../../../Context/UseAppContext";
import { routes } from "../../../Routes";

function Part({ className, children }) {
	return <div className={className}>{children}</div>;
}

function UserMenu() {
	const { auth } = useAppContext();
	return (
		<>
			<div className="user_auth">
				<p className="userName" title={auth?.userName}>
					{auth?.userName}
				</p>
				<div className="userPic">
					<img src={USRAVT} alt="User Avartar"></img>
				</div>
			</div>

			<button className="menu">
				<FontAwesomeIcon icon={faBars} />
			</button>
		</>
	);
}

function Content({ HVNICON }) {
	const headerPartClassName = "header-part";
	const parts = ["icon", "title", "social", "user_menu"];

	const partChild = {
		icon: <img src={HVNICON} alt="THPT Huỳnh Văn Nghệ"></img>,
		title: <h1>HUYNH VAN NGHE HIGH SCHOOL</h1>,
		social: socialContactLinks.map(({ tag, props, children }, index) =>
			React.createElement(tag, { ...props, key: index }, children)
		),
		user_menu: <UserMenu />,
	};

	return (
		<div className="content">
			{parts.map((partName) => (
				<Part key={partName} className={`${headerPartClassName} header-${partName}`}>
					{partChild[partName]}
				</Part>
			))}
		</div>
	);
}

function NavBar() {
	const [activeElement, setActiveElement] = useState(routes[0].id)
	const handleClick = (e) => {
		setActiveElement(e.id)
	};

	const navBarElementClassName = "navbar__element";
	const Links = routes.map((route) => ({ props: { to: route.path, id: route.id }, title: route.title }));
	return (
		<div className="navbar">
			{Links.map((link) => (
				<Link
					key={link.title}
					{...link.props}
					style={link.props.id===activeElement?{backgroundColor: "rgba(185, 185, 185, 0.511)"}:{}}
					onClick={(e) => handleClick(e.target)}
					className={navBarElementClassName}
				>
					{link.title}
				</Link>
			))}
		</div>
	);
}

function Header({ HVNICON }) {
	console.log("RERENDER");
	return (
		<header id="webHeader">
			<Content HVNICON={HVNICON} />
			<NavBar />
		</header>
	);
}

export default React.memo(Header);
