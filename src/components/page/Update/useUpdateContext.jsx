import { useContext } from "react";
import { UpdateContext } from "./Update";

export default function useUpdateContext() {
	return useContext(UpdateContext);
}