import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SomeContext, {initialSomeContext} from "./context/SomeContext";
import SessionProvider from "./context/Session/SessionProvider";

ReactDOM.render(
    <SomeContext.Provider value={initialSomeContext}>
        <SessionProvider>
            <App/>
        </SessionProvider>
    </SomeContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
