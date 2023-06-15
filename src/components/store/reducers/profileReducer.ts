import {ProfilePageType} from "../state";
import {AddPostActionType, RootActionType, UpdateTextActionType} from "../../../types/actionType";

export const profileReducer = (state: ProfilePageType, action: RootActionType): ProfilePageType => {
	if (action.type === "ADD-POST") {
		let newPost = {
			id: 5,
			message: action.newMessage,
			likesCount: 0
		};
		state.posts.unshift(newPost)
		state.updateText = ''

	} else if (action.type === "UPDATE-TEXT") {
		state.updateText = action.newText
	}
	return state
}

export const addPostAC = (newMessage: string):AddPostActionType  => {
	return {
		type: "ADD-POST",
		newMessage
	}
}
export const updateTextAC = (newText: string):UpdateTextActionType  => {
	return {
		type: "UPDATE-TEXT",
		newText
	}
}