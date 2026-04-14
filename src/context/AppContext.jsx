import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {


    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}
export { AppContext, AppProvider };
