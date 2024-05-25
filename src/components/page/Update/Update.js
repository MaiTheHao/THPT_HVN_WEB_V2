import React, { useState } from "react";
import "./Update.scss";
import Tippy from "@tippyjs/react/headless";

function Update() {  
	const [visible, setVisible] = useState(false);
	return (
		<Tippy
		interactive
		visible={visible}
		render = {atttrs => (
			<div className="wrapperContainer">
				result
			</div>
		)}
		>
			<button style={{width:"8vw"}} onClick={() => setVisible(!visible)}>Menu</button>
		</Tippy>
	);
}

export default Update;
