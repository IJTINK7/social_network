import { RootActionType } from "../../types/actionType"

//исправить типизацию объекта store

export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagePageType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostType[]
    updateText: string
}

export type MessagePageType = {
    dialogsData: DialogsDateType[]
    messagesData: MessagesDateType[]
    updateMessage: string
}


export type DialogsDateType = {
    id: number
    name: string
}

export type MessagesDateType = {
    id: number
    message: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subsribe: (obsrver: (state: StateType) => void ) => void
    getState: () => StateType
    dispatch: (action:RootActionType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'my first post', likesCount: 12 },
                { id: 2, message: 'how care you ?', likesCount: 11 },
                { id: 3, message: 'put likes', likesCount: 17 }
            ],
            updateText: '',
        },
        messagesPage: {
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
        },
    } as StateType,
    _callSubscriber(state: StateType) {
        console.log("state");
    },
    subsribe(obsrver: (state: StateType) => void) {
        this._callSubscriber = obsrver
    },
    getState() {
        return this._state
    },

    dispatch(action:RootActionType) {
         if(action.type === "ADD-POST"){
            let newPost = {
                id: 5,
                message: action.newMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.updateText = ''
            this._callSubscriber(this._state);
         } else if (action.type === "UPDATE-TEXT"){
            this._state.profilePage.updateText = action.newText
            this._callSubscriber(this._state);
         } else if(action.type === "UPDATE-MESSAGE"){
            this._state.messagesPage.updateMessage = action.newMessageText
            this._callSubscriber(this._state);
         }else if(action.type === " ADD-MESSAGE"){
            let newMessage = {
                id: 9,
                message: action.message
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.updateMessage = ''
            this._callSubscriber(this._state);
         }
    }
}
