import { createContext, useState } from "react";

const DUMMY_SETTINGS = [{
    geoTrackingEnabled: false,
    fuelType: "Super E10"
}]


const SettingsContext = createContext({
    geoTrackingEnabled: false,
    fuelType: "Super E95",
    changeGeotracking: () => {},
    changeFuelType: () => {}
}

);

export function SettingsContextProvider(props){
    const [geoTrackingEnabled, setGeoTrackingEnabled] = useState(false);
    const [fuelType, setFuelType] = useState("Super E95");
    
    function handleChangeGeoTracking(){
        setGeoTrackingEnabled(!geoTrackingEnabled)
        
    }
    function handleChangeFuelType(fuel){
        setFuelType(fuel)
    }

    const context = {
        geoTrackingEnabled: geoTrackingEnabled,
        fuelType: fuelType,
        changeGeotracking: handleChangeGeoTracking,
        changeFuelType: handleChangeFuelType
    };

    return <SettingsContext.Provider value={context}>
        {props.children}
    </SettingsContext.Provider>
}
export default SettingsContext;