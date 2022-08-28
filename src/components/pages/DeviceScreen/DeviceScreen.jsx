import "./deviceScreen.css";
import React from "react";
import { useContext } from "react";
import { deviceContext } from "../../../contexts/device";
import DevicesCard from "../DevicesCard/DevicesCard";

function DeviceScreen() {
  const {device , setDevice} = useContext(deviceContext);
  return (
    <deviceContext>
      <div className="device-screen">
        {
          device?.map(DeviceItem=>
            <DevicesCard device={DeviceItem}/>
            )
        }
      </div>
    </deviceContext>
  );
}

export default DeviceScreen;
