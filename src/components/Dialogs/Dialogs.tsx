import React, { ChangeEvent, useRef } from 'react';
import s from './Dialogs.module.css'
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDateType, MassagePageType} from "../store/state";

type DialogsPropsType = {
   state: MassagePageType
   addMessage:(message: string)=>void
   updateMessage:(newMessageText:string)=>void

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();
    let newMessage = useRef<HTMLTextAreaElement>(null)
    const addMessageHandler = () => {
        if (newMessage.current) props.addMessage(newMessage.current.value)
    }
    const  updateMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateMessage(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map((dialog: DialogsDateType) => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id} />
                        )
                    })
                }


            </div>

            <div className={s.messages}>
              {props.state.messagesData.map((el)=> <Message id={el.id} message={el.message}/>)}
            </div>
            <div>
                <textarea value={props.state.updateMassage} onChange={updateMessageHandler} ref={newMessage}></textarea>
                <button onClick={addMessageHandler}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;
