
import React from 'react';
import {useSelector} from "react-redux";
import {User} from "./User";

export const Users = (props) =>{
    const users = useSelector(state => state.users.users);
    return (
        <ul>
            {
                users.map((user) =>{
                    return <User key={user.id} user={user}/>
                })
            }
        </ul>
    );
}
