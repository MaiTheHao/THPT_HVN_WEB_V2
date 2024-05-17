import React, { useEffect,useState } from "react";
import { GetClass, GetGroup, GetMember } from "./API";
import Obj from "./Obj";

function RankTable({ field }) {
	const [data, setData] = useState([]);
	useEffect(() => {
		if(field === "member"){
			GetMember(setData);
		} else if(field === "group"){
			GetGroup(setData);
		} else if(field === "class"){
			GetClass(setData);
		}
		//eslint-disable-next-line
	}, [field])
	return (
		<div id="rankTable" className="scrollY">
			<div id="title">
				<h2>DANH SÁCH XẾP HẠNG {(field==="member"?"THÀNH VIÊN":(field==="group")?"NHÓM":(field==="class")?"LỚP":null)}</h2>
			</div>
			<div id="table">
				<ul>
					{data.map((obj, index) => <Obj key={`${obj.type}_${index}`} top={index + 1} name={obj.name} type={obj.type} prop={obj.role}></Obj>)}
				</ul>
			</div>
		</div>
	);
}

export default RankTable;
