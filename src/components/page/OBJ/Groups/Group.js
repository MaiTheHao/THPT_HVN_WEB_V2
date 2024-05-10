import React, { useState } from 'react'
import { Search, Info } from "../MainComponent";

function Group() {
	const [isSearch, setIsSearch] = useState(true);
	return <div id="comp_Group" className="obj_Component">{isSearch ? <Search /> : <Info />}</div>;
}

export default Group