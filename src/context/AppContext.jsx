import { createContext,  useContext, useEffect, useState } from "react";
import { fetchData } from "../utils";

 const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const [data, setData]=useState([])

  useEffect(() => {
  const loadData = async () => {
    const result = await fetchData(); // ✅ wait for real data
    setData(result);
  };

  loadData();
}, []);
console.log(data);

    
    


    return (
        <AppContext.Provider value={{ timeline, setTimeline, data, setData }}>
        {children}
    </AppContext.Provider>
    )
}
const useAppContext = () => {
    return useContext(AppContext);
}


export { AppProvider, useAppContext }   ;
