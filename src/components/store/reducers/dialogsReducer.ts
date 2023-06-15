
import {AddMessageActionType, RootActionType, UpdateMessageTextActionType} from "../../../types/actionType";
import {MessagePageType} from "../state";

export const dialogsReducer = (state: MessagePageType, action: RootActionType): MessagePageType => {
	if(action.type === "UPDATE-MESSAGE"){
		state.updateMessage = action.newMessageText
	}else if(action.type === "ADD-MESSAGE"){
		let newMessage = {
			id: 9,
			message: action.message
		}
		state.messagesData.push(newMessage)
		state.updateMessage = ''
	}
	return state
}

export const updateMessageAC = (newMessageText:string): UpdateMessageTextActionType => {
	return {
		type: "UPDATE-MESSAGE",
		newMessageText
	}
}
export const addMessageAC = (message:string): AddMessageActionType => {
	return {
		type: "ADD-MESSAGE",
		message
	}
}