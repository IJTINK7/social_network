const ADD_POST = "ADD-POST"
const UPDATE_TEXT = "UPDATE-TEXT"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

export type RootActionType = AddPostActionType | UpdateTextActionType | UpdateMassageText | AddMassageText

export type AddPostActionType = {
	type: typeof ADD_POST
	newMessage: string
}
export type UpdateTextActionType = {
	type: typeof UPDATE_TEXT
	newText: string
}
export type UpdateMassageText = {
	type: typeof UPDATE_MESSAGE
	newMassageText: string
}
export type AddMassageText = {
	type: typeof ADD_MESSAGE
	message: string
}


