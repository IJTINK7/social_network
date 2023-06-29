import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../store/reduxStore/storeRedux";

type ProfileProps = {
    store: StoreType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPostsContainer store={props.store}/>
    </div>

};

export default Profile;