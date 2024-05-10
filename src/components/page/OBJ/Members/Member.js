import React, { useState } from "react";
import { Search, Info } from "../MainComponent";
import "./Member.scss";

function Member() {
	const [isSearch, setIsSearch] = useState(true);
	return <div id="comp_Member" className="obj_Component">{isSearch ? <Search /> : <Info />}</div>;
}

export default Member;
