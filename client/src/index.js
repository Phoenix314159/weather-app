import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(ReduxPromise));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);


registerServiceWorker();
