import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import App from './components/Pages/app/app.jsx';
import { store, history } from './store/store.jsx';

import 'normalize.css';

import '../public/fonts/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);