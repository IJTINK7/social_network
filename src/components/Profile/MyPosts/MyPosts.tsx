import React, {useRef} from 'react';
import s from './MyPosts.module.css';

type MyPostsProps = {

}

const MyPosts = () => {

    let newTextElement = useRef<HTMLTextAreaElement>(null);


    let postsElements;

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