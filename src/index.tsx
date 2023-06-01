import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  {store, StateType} from './components/redux/state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} dispatch={store.dispatch}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

store._subscribe(rerenderEntireTree)
rerenderEntireTree(store.getState());

reportWebVitals();
