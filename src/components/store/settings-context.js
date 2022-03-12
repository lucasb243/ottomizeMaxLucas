import { createContext, useState } from "react";

const DUMMY_SETTINGS = [{}]


const SettingsContext = createContext(
);

export function SettingsContextProvider(props){
    


    const context = {
    };

    return <SettingsContext.Provider value={context}>
        {props.children}
    </SettingsContext.Provider>
}
export default SettingsContext;