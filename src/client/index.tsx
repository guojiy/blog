import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {createClientStore} from './store/index';
const store = createClientStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));