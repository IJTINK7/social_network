import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../redux/state';

type ProfileProps = {
   profilePage: ProfilePageType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts myPosts={props.profilePage.posts} />
    </div>

};

export default Profile;