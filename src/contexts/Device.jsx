import { createContext, useState ,useEffect} from "react";
import DeviceScreen from "../components/pages/DeviceScreen/DeviceScreen";
import getDevices from "../services/devices";

export const deviceContext = createContext();

const Devices = () => {
  const [device, setDevice] = useState([]);
  useEffect(() => {
    getDevices()
      .then((result) => setDevice(result));
      console.log(device);
  }, []);

  return (
    <deviceContext.Provider value={{ device, setDevice }}>
      <DeviceScreen />
    </deviceContext.Provider>
  );
};
export default Devices;
