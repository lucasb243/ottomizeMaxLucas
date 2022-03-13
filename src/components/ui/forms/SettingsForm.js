import React, {useContext, useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import classes from "./SettingsForm.module.css"
import SettingsContext from '../../store/settings-context';

function SettingsForm() {

    const settingsCTX = useContext(SettingsContext);

    function onChangeGeoTracking(){
        settingsCTX.changeGeotracking();
    }

    return (
        <div>
            <Form>
                <Form.Switch custom type="switch" 
                    id="custom-switch" 
                    label="Enable geotracking"
                    onChange={onChangeGeoTracking}
                    checked={settingsCTX.geoTrackingEnabled}/>
            </Form>
        </div>
    )

}
export default SettingsForm;
