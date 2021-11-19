import React from 'react';
import ReactDOM from 'react-dom';

import { AppContext } from './components/Context/Context';
import App from './components/App/App';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <AppContext>
            <App />
        </AppContext>
    </React.StrictMode>,
    document.getElementById('root')
);


