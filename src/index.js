import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContextProvider} from './components/store/user-context';
import {SettingsContextProvider} from './components/store/settings-context';

ReactDOM.render (
    <UserContextProvider>
        <SettingsContextProvider>
            <App/>
        </SettingsContextProvider>
    </UserContextProvider>,
    document.getElementById('root')
);
