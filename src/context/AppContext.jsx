import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils";
 import { useMemo } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadData = async () => {
    try {
      setLoading(true);
      const result = await fetchData();
      setData(result);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

 

const value = useMemo(() => ({
  timeline,
  setTimeline,
  data,
  setData,
  loading
}), [timeline, data, loading]);

  return (
    <AppContext.Provider
      value={value}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
