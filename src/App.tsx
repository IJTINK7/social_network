import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import {StoreType} from './components/store/reduxStore/storeRedux';


type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/dialogs'} element={<Dialogs store={props.store} />} />
                    <Route path={'/profile'} element={<Profile store={props.store}/>} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
