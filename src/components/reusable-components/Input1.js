import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Input1({blockId, inputId, placeholder, ...rest}) {
	return (
		<div id={blockId || "searchForm"}>
			<input id={inputId} placeholder={placeholder} {...rest}/>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</div>
	);
}

export default Input1;
