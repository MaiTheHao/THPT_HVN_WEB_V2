import { useContext } from "react";
import { appContext } from "./AppContextProvider";

export default function useAppContext(){ return useContext(appContext) };