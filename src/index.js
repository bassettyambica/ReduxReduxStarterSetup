import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import App from './components/App';

const store = createStore(
        reducers,
        {},
        applyMiddleware(reduxThunk)
    );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);