import React from "react";
import Icon from "./Icon.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import listElement from "../../../../elements.json"
import { Link } from "react-router-dom";
import "./ListElement.scss";
import useUpdateContext from "../../../../useUpdateContext.jsx";

function ListElement() {
	const { searchValue, proviAction } = useUpdateContext();
	const searchText = searchValue?.value || "";
	return (
		<>
			{listElement.map((element, index) =>
				searchText.trim() === "" || (searchText?.length > 0 && element.title.trim().toLowerCase().includes(searchText.toLowerCase())) ? (
					<Link className="element" id={element.id} key={`content-element${index}`} onClick={(e) => proviAction("setTarget", { id: element.id })}>
						<div className="element-icon">
							<FontAwesomeIcon icon={Icon[element.icon]} style={element?.style} />
						</div>
						<h3 className="element-title">{element.title}</h3>
					</Link>
				) : null
			)}
		</>
	);
}

export default ListElement;
