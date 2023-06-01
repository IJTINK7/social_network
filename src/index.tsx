import React from 'react';
import reportWebVitals from './reportWebVitals';
// import state from './components/redux/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import  { state, StateType, addPost, updateText, addMassage, updateMassageText, subsribe} from './components/redux/state';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App updateMassageText={updateMassageText} addMassage={addMassage} state={state} updateText={updateText} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

subsribe(rerenderEntireTree)
rerenderEntireTree(state);

reportWebVitals();
