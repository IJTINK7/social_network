import React from 'react';
import s from './MyPosts.module.css';
import { UpdateTextAC, addPostAC } from '../../store/reducers/profileReducer';
import MyPosts from "./MyPosts";
import {StoreType} from "../../store/reduxStore/storeRedux";



type MyPostsProps = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsProps) => {
    let state = props.store.getState().profilePage

    const addPost = (text: string) => {
     props.store.dispatch(addPostAC(text))
    }

    const updateText = (text: string) => {
        props.store.dispatch(UpdateTextAC(text))
    }

    return <div className={s.postsBlock}>
      <MyPosts myPosts={state.posts} newText={state.updateText} addPost={addPost} updateText={updateText}/>
    </div>

};