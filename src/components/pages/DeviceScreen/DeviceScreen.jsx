import "./deviceScreen.css";
import React from "react";
import { useContext } from "react";
import { deviceContext } from "../../../contexts/device";

function DeviceScreen() {
  const {device , setDevice} = useContext(deviceContext);
  return (
    <deviceContext>
      <div className="device-screen">
        {
          device?.map(DeviceItem=>
            <DeviceScreen device={DeviceItem}/>
            )
        }
      </div>
    </deviceContext>
  );
}

export default DeviceScreen;
