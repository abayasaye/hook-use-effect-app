import { useEffect, createContext, useState } from "react";


const c = console.log;

export const myContext = createContext();

const DevicesProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);


  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
      .then((res) => res.json())
      .then((result) => setDevices(result));
  }, []);

  return (
      <myContext.Provider value={{ devices, setDevices }}>
        {children}
      </myContext.Provider>
  );
};
export default DevicesProvider;
