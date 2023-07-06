import { AddPostActionType, RootActionType, UpdateTextActionType } from './../../../types/actionType';
import { ProfilePageType } from "../state";

const initialState:ProfilePageType  = {
    posts: [
        { id: 1, message: 'my first post', likesCount: 12 },
        { id: 2, message: 'how are you ?', likesCount: 11 },
        { id: 3, message: 'put likes', likesCount: 17 }
    ],
    updateText: '',
}
//Переделать if else на switch case
//Избавиться от переменной stateCopy, создавать объект и сразу его возвращать без промежуточной переменной stateCopy
//push используется редко, создав новый массив, закидываем все элементы из старого массива и после запятой дописываем еще один новый элемент.
//При формировании нового объекта для свойства message значение брать из state, а не из аргумента функции addPost()
//addPost для запуска функции, а что куда добавлять это дело BLL.
export const profileReducer = (state: ProfilePageType = initialState, action: RootActionType): ProfilePageType => {

    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: action.newMassage,
            likesCount: 0
        };
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.unshift(newPost)
        stateCopy.updateText = ''
        return stateCopy
    } else if (action.type === "UPDATE-TEXT") {
        let stateCopy = {...state}
        stateCopy.updateText = action.newText
        return    stateCopy
    }
    return state
}

export const addPostAC = (newMassage: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newMassage
    }
}

export const UpdateTextAC = (newText: string): UpdateTextActionType => {
    return {
        type: 'UPDATE-TEXT',
        newText
    }
}
