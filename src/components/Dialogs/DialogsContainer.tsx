import React from 'react';
import {AppRootStateType} from "../store/reduxStore/storeRedux";
import {addMessageAC, updateMessageAC} from "../store/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsDateType} from "../store/state";


type mapStateToPropsType = {
    dialogsData: DialogsDateType[]
    updateMassage: string
}
type mapDispatchToPropsType={
    addMessage: (message: string)=> void
    updateMassage: (newMessageText:string) => void
}
const mapStateToProps = (state: AppRootStateType):mapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        updateMassage: state.dialogsPage.updateMassage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (message: string)=>{
            dispatch(addMessageAC(message))
        },
        updateMassage: (newMessageText:string) => {
            dispatch(updateMessageAC(newMessageText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

