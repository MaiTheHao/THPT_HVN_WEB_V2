import React from "react";
import { ContainerElementRowChild } from "../../Home/child/Container";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import Advanced from "../MainComponent/child/Info/Advanced";

function UserRecentAct() {
	const recentActivities = [
		{
			id: 1,
			title: "Hoạt động A",
			picSrc: HVNBANNER,
			description: "Mô tả ngắn gọn về hoạt động A",
			finalPath: "",
		},
		{
			id: 2,
			title: "Hoạt động B",
			picSrc: HVNBANNER,
			description: "Mô tả ngắn gọn về hoạt động B",
			finalPath: "",
		},
		{
			id: 3,
			title: "Hoạt động C",
			picSrc: HVNBANNER,
			description: "Mô tả ngắn gọn về hoạt động C",
			finalPath: "",
		},
	];
	return (
		<Advanced id="userRecentActs">
			{recentActivities.map((activity, index) => (
				<ContainerElementRowChild addClass="userRecentAct" key={` UserRecentAct_${index}`} {...activity} />
			))}
		</Advanced>
	);
}

export default UserRecentAct;
