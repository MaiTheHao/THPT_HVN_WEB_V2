import React from "react";
import SideBar from "./part/SideBar";
import BaseLayout from "./BaseLayout";
import "./Layout.scss";

function Layout1({ children }) {
	return (
		<BaseLayout id="ly1" sidebar={<SideBar />}>
			{children}
		</BaseLayout>
	);
}

function Layout2({ children }) {
	return <BaseLayout id="ly2">{children}</BaseLayout>;
}

export {Layout1, Layout2};