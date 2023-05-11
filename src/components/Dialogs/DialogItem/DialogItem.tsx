import React from 'react';
import s from './../Dialogs.module.css'
import {useNavigate} from 'react-router-dom';
import {DialogsDataPropsType, MessagePageType, MessagesDataPropsType} from "../../redux/state";

const DialogItem = (props:DialogsDataPropsType) => {
    const navigate = useNavigate();
    return <div
        onClick={() => {
            navigate(props.name)
        }}
        className={s.dialog + " " + s.active}
    >
        {props.name}
    </div>
}
export default DialogItem;