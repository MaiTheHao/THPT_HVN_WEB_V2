import React from "react";
import useUpdateContext from "../../../useUpdateContext";
import Route from "./Route";

function Container() {
	const { target } = useUpdateContext();
	return <div><Route id={target?.id}/></div>;
}

export default Container;
