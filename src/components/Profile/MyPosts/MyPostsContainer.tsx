import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { UpdateTextAC, addPostAC } from '../../store/reducers/profileReducer';
import MyPosts from "./MyPosts";
import {StoreType} from "../../store/reduxStore/storeRedux";
import {PostType} from "../../store/state";


type MyPostsProps = {
    store: StoreType
    myPosts: PostType[]
    newText: string
}

export const MyPostsContainer = (props: MyPostsProps) => {


    let newTextElement = useRef<HTMLTextAreaElement>(null)


    const addPost = () => {
        if (newTextElement.current) props.store.dispatch(addPostAC(newTextElement.current.value))
    }

    const updateText = (text: string) => {
        props.store.dispatch(UpdateTextAC(text))
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && newTextElement.current?.value) addPost()
    }

    return <div className={s.postsBlock}>
      <MyPosts myPosts={} dispatch={} newText={}/>
    </div>

};