import React from "react";
import typeId from "./set_type_id.json";
import Para from "./Para";
import Table from "./Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFire, faStar } from "@fortawesome/free-solid-svg-icons";

// PARA : title, listPara
// PARA-listContext : [{title, description}]

function Context({ type, icon, dataStruct }) {
	const icons = {
		star: <FontAwesomeIcon className="innericon icon-star" icon={faStar} />,
		heart: <FontAwesomeIcon className="innericon icon-heart" icon={faHeart} />,
		fire: <FontAwesomeIcon className="innericon icon-fire" icon={faFire} />,
	};
	const comps = {
		1: <Para icon={icons[icon]} {...dataStruct}></Para>,
		2: <Table></Table>,
	};

	return <>{comps[typeId[type]]}</>;
}

export default Context;
