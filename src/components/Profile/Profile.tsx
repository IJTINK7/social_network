import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileProps = {

}

const Profile = () => {

    return <div>
        <ProfileInfo/>
        <MyPosts />
    </div>

};

export default Profile;