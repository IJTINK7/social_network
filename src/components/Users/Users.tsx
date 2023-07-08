import React from 'react';
import {UserType} from "../store/reducers/usersReducer";

type UsersPropsType = {
	users: UserType[]
	follow: (useId: number) => void
	unfollow: (useId: number) => void
	setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {

	return (
		<div>
			{props.users.map(u => {
				return <div key={u.id}>
					<div>

						<div>
							<img width="300px" src={u.photoUrl} alt="photoProfile"/>
						</div>
						<div>
							{u.followed ?
								<button onClick={() => props.unfollow(u.id)}>Unfollow</button>
								: <button onClick={() => props.follow(u.id)}>Follow</button>}
						</div>

					</div>

					<div>
						<div>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</div>
						<div>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</div>
					</div>
				</div>
			})}
		</div>
	);
};