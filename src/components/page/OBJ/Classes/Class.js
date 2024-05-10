import React, { useState } from 'react'
import { Search, Info } from "../MainComponent";

function Class() {
	const [isSearch, setIsSearch] = useState(true);
	return <div id="comp_Class" className="obj_Component">{isSearch ? <Search /> : <Info />}</div>;
}

export default Class