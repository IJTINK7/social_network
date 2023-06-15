import {ProfilePageType} from "../state";
import {AddPostActionType, RootActionType, UpdateTextActionType} from "../../../types/actionType";

const initialState: ProfilePageType = {
	posts: [
		{ id: 1, message: 'my first post', likesCount: 12 },
		{ id: 2, message: 'how care you ?', likesCount: 11 },
		{ id: 3, message: 'put likes', likesCount: 17 }
	],
	updateText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: RootActionType): ProfilePageType => {
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