import { createContext, useState } from "react";
export const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return (
        <appContext.Provider value={{ auth, setAuth }}>
            {children}
        </appContext.Provider>
    );
};

export default AppContextProvider;
