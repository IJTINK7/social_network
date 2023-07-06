import React, { ChangeEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {StoreType} from "../store/reduxStore/storeRedux";
import {addMessageAC, updateMessageAC} from "../store/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsPropsType = {
 store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();
    const state = props.store.getState().dialogsPage

    const updateMessage = (newMessageText:string) => {
       props.store.dispatch(updateMessageAC(newMessageText))
    }

    const  addMessage = (message: string)=>{
        props.store.dispatch(addMessageAC(message))

    }

    return (
        <Dialogs state={state} addMessage={addMessage} updateMessage={updateMessage}/>
    )
}


