import React, { ChangeEvent, useRef } from 'react';
import s from './Dialogs.module.css'
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDateType, MessagePageType, MessagesDateType } from '../redux/state';
import {RootActionType} from "../../types/actionType";
import {rerenderEntireTree} from "../../index";


type DialogsPropsType = {
    messagesPage: MessagePageType
    dispatch: (action:RootActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();

    let newMessage = useRef<HTMLTextAreaElement>(null)

    const updateMessageHandler = () => {
        if (newMessage.current) props.dispatch({type: "ADD-MESSAGE", message: newMessage.current.value})
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({type: "UPDATE-MESSAGE", newMessageText: e.currentTarget.value})
        
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.messagesPage.dialogsData.map((dialog: DialogsDateType) => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id} />
                        )
                    })
                }


            </div>

            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message: MessagesDateType) => {
                        return <Message message={message.message} id={message.id} />
                    })
                }

            </div>
            <div>
                <textarea value={props.messagesPage.updateMessage} onChange={updateMessageTextHandler} ref={newMessage}></textarea>
                <button onClick={updateMessageHandler}>Add</button>
            </div>
        </div>
    )
}
