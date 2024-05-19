import React from "react";
import HVNBANNER from "../../../../pic/HVN_banner-trs.jpg";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Obj({ top, avatar, name, type, prop, score, ...rest}) {
	return (
		<li className="obj-rank">
			<div className={`box-top top${top}`}>
				<span>
					{top <= 3 ? (
						<>
							#{top} <FontAwesomeIcon icon={faCrown} />
						</>
					) : (
						`#${top}`
					)}
				</span>
			</div>
			<div className="box-img">
				<img alt="none" src={avatar || HVNBANNER}></img>
			</div>
			<div className="box-text">
				<div className="box-text-left">
					<h5 className="objName">{name}</h5>
					<span className="objRole">{type}</span>
					<span className="objProp">{prop} {{...rest}?.studentClass}</span>
				</div>
				<div className="box-text-right">
					<span className="objScore">ĐIỂM: <span>{score || "Không có dữ liệu"}</span></span>
				</div>
			</div>
		</li>
	);
}

export default Obj;
