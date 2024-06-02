import React from "react";
import { Link } from "react-router-dom";
import HVNBANNER from "../../../../pic/HVN_banner-icon.jpg";
import Advanced from "../MainComponent/child/Info/Advanced";

function UserGroups() {
	const usergroups = [
		{ role: null, type: "Nhóm", name: "Dân Chơi Học Vần", score: 215, id: "07" },
		{ role: null, type: "Nhóm", name: "Băng Hậu Chém Gió", score: 200, id: "63" },
		{ role: null, type: "Nhóm", name: "F4 Học Đường", score: 189, id: "124" },
		{ role: null, type: "Nhóm", name: "Thánh Nhây Hội", score: 188, id: "1231" },
		{ role: null, type: "Nhóm", name: "Chuyên Gia Chém Gió", score: 165, id: "42" },
		{ role: null, type: "Nhóm", name: "Bà Tám Học Đường", score: 155, id: "11" },
		{ role: null, type: "Nhóm", name: "Hội Chị Em Cà Khịa", score: 143, id: "22" },
		{ role: null, type: "Nhóm", name: "Bộ Ba Siêu Quậy", score: 133, id: "421" },
	];
	return (
		<Advanced id="userGroups">
			{usergroups.map((group, index) => (
				<Link key={`userGroups_${index}`} className="userGroup">
					<div className="box-img">
						<img src={group?.avatar || HVNBANNER} alt="group AVATAR"></img>
					</div>
					<div className="box-text">
						<h5 className="Name-Type">
							{group?.name} - {group?.type}
						</h5>
						<ul className="OtherProps">
							{group?.role ? <li className="group-role">{group.role}</li> : null}
							{group?.class ? <li className="group-class">{group.class}</li> : null}
						</ul>
					</div>
				</Link>
			))}
		</Advanced>
	);
}

export default UserGroups;
