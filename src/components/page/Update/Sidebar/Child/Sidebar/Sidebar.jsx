import React from "react";
import Container from "./Container";
import useUpdateContext from "../../../useUpdateContext";
import FadeIn from "../../Animation/FadeIn";
import SidebarOpenBtn from "./Child/SidebarOpenBtn";

function Sidebar() {
	const { SIDEBAR_MAXWIDTH, sidebarVisible } = useUpdateContext();
	return (
		<>
			<FadeIn maxWidth={SIDEBAR_MAXWIDTH} isVisible={sidebarVisible} className="sidebar">
				<Container />
			</FadeIn>
			<SidebarOpenBtn />
		</>
	);
}

export default Sidebar;
