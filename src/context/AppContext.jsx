import { createContext, useContext, useState } from "react";

 const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);


    return (
        <AppContext.Provider value={{ timeline, setTimeline }}>
        {children}
    </AppContext.Provider>
    )
}
const useAppContext = () => {
    return useContext(AppContext);
}


export { AppProvider, useAppContext }   ;
