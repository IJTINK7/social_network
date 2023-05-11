import {rerenderEntireTree} from '../../render';

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}
export type ProfilePageType={
    posts: PostsPropsType[]
    updateText: string
}
export type PostsPropsType ={
    id: number
    message: string
    likesCount: number
}
export type MessagePageType = {
    dialogsData: DialogsDataPropsType[]
    messagesData: MessagesDataPropsType[]
}
export type DialogsDataPropsType = {
    id: number
    name: string
}
export type MessagesDataPropsType={
    id: number
    message: string
}
let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'my first post', likesCount: 12},
            {id: 2, message: 'how are you ?', likesCount: 11},
            {id: 3, message: 'put likes', likesCount: 17}
        ],
        updateText: '',
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Yulia'},
            {id: 2, name: 'Semen'},
            {id: 3, name: 'Tereza'},
            {id: 4, name: 'Lola'},
            {id: 5, name: 'Evgenia'},
            {id: 6, name: 'Sonja'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-Kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Ho'},
            {id: 5, message: 'Ye'},
            {id: 6, message: 'Hi'},
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state);
}




export default state;