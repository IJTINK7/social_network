import React from 'react';
import s from './Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataPropsType, MessagePageType, MessagesDataPropsType} from "../redux/state";


type DialogsPropsType={
    messagesPage: MessagePageType
}

export const Dialogs = (props:DialogsPropsType) => {
    const navigate = useNavigate();
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                  props.messagesPage.dialogsData.map((dialog:DialogsDataPropsType) =>{
                      return(
                          <DialogItem name={dialog.name} id={dialog.id}/>
                      )
                  })
                }
            </div>

            <div className={s.messages}>
                {
                    props.messagesPage.messagesData.map((message:MessagesDataPropsType) =>{
                        return(
                            <Message message={message.message} id={message.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dialogs;