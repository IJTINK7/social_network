import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AppRootStateType, store} from "./components/store/reduxStore/storeRedux";

//аргументы функции!
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: AppRootStateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
rerenderEntireTree(store.getState());

reportWebVitals();
