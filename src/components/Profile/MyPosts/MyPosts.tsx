import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {PostsPropsType} from "../../redux/state";
import Post from "./Post/Post";

type MyPostsPropsType = {
    myPosts: PostsPropsType[]
}

const MyPosts = (props:MyPostsPropsType) => {

    let newTextElement = useRef<HTMLTextAreaElement>(null);


    let postsElements = props.myPosts.map(el => <Post title={el.message} likesCount={el.likesCount}/>);

    const addPost = () => {}

    const updateText = () => {}

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newTextElement} onChange={()=>{}} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;