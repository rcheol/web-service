import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type SomeContextType = {
    fieldA: number;
    fieldB: string;
    userName: string;
}

export const initialSomeContext: SomeContextType = {
    fieldA: 0,
    fieldB: 'foo',
    userName: '홍길동'
};

export const SomeContext = React.createContext(initialSomeContext);

ReactDOM.render(
    <SomeContext.Provider value={initialSomeContext}>
        <App />
    </SomeContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
