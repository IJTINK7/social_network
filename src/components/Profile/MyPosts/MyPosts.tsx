import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import { PostType } from '../../redux/state';
import Post from './Post/Post';

type MyPostsProps = {
    myPosts: PostType[]
}

const MyPosts = (props:MyPostsProps) => {


    let newTextElement = null


    let postsElements = props.myPosts.map(((el) => <Post key={el.id} title={el.message} likesCount={el.likesCount}/>))
    
    const addPost = () => {}

    const updateText = () => {}

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea onChange={()=>{}} ></textarea>
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