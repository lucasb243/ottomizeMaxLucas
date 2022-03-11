import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContextProvider} from './components/store/user-context';

ReactDOM.render (
    <UserContextProvider>
        <App/>
    </UserContextProvider>,
    document.getElementById('root')
);
