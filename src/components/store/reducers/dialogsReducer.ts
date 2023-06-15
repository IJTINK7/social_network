
import {AddMessageActionType, RootActionType, UpdateMessageTextActionType} from "../../../types/actionType";
import {MessagePageType} from "../state";

const initialState: MessagePageType = {
	dialogsData: [
		{ id: 1, name: 'Yulia' },
		{ id: 2, name: 'semen' },
		{ id: 3, name: 'Tereza' },
		{ id: 4, name: 'Lola' },
		{ id: 5, name: 'Evgenia' },
		{ id: 6, name: 'Sonja' }
	],
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-Kamasutra?' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
		{ id: 6, message: 'Yo' },
	],
	updateMessage: ''
}


export const dialogsReducer = (state: MessagePageType = initialState, action: RootActionType): MessagePageType => {
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