import React, { useState } from "react";
import useUpdateContext from "../../../useUpdateContext";
import Route from "./Route";
import "./Form.scss";
import MainForm from "./MainForm";
import Wrapper from "../../../../../Wrapper/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFileCircleXmark, faFilePen } from "@fortawesome/free-solid-svg-icons";

const listFields = [
	{ title: "Chỉnh sửa", icon: faFilePen },
	{ title: "Thêm", icon: faFileCirclePlus },
	{ title: "Xóa", icon: faFileCircleXmark },
];

function Container() {
	const { target } = useUpdateContext();
	const [changeActionVisible, setChangeActionVisible] = useState(false);
	const [actionIndex, setActionIndex] = useState(0);
	const action = listFields[actionIndex];

	const ListSubject = ({ attrs }) => (
		<div className="selectField-container scrollY" {...attrs}>
			{listFields.map((field, index) => (
				<span key={field.title} className={index === actionIndex ? "selected element" : "element"} onClick={() => setActionIndex(index)}>
					<span className="icon">
						<FontAwesomeIcon icon={field?.icon} />
					</span>
					<span className="name">{field.title}</span>
				</span>
			))}
		</div>
	);

	return (
		<div className="form-container">
			<MainForm target={target}>
				<Route id={target?.id} />
			</MainForm>
			<Wrapper
				buttonTitle={
					<>
						<span className="icon">
							<FontAwesomeIcon icon={action?.icon} />
						</span>
						<span className="name">{action?.title}</span>
					</>
				}
				stateVisible={changeActionVisible}
				setState={setChangeActionVisible}
				ListRenderComponent={ListSubject}
				className="form-actionType_button"
			></Wrapper>
		</div>
	);
}

export default Container;
