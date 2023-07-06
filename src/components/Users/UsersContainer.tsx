import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../store/reduxStore/storeRedux";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../store/reducers/usersReducer";
import {Users} from "./Users";


type mapStateToPropsType = {
	users: UserType[]
}
type mapDispatchToPropsType = {
	follow:(useId:number) => void
	unfollow: (useId:number) => void
	setUsers: (users: UserType[])=> void
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
	return{
		users: state.usersPage.users
	}
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return{
		follow: (userID: number)=> dispatch(followAC(userID)),
		unfollow: (userID: number)=> dispatch(unfollowAC(userID)),
		setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
	}
}


export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)