import React from 'react';
import s from './../Dialogs.module.css'
import {useNavigate} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props:any) => {
    const navigate = useNavigate();
    return <div
        onClick={() => {
            // navigate(props.name)
        }}
        className={s.dialog + " " + s.active}
    >
        {props.ame}
    </div>
}
export default DialogItem;
