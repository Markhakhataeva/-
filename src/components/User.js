import React from 'react';
import {Link, useParams} from "react-router-dom";

export const User = ({user}) => {
    const {id}=useParams()

    return (
        <li>
            <Link to={`/${user.id}`}>
                {user.name}
            </Link>

        </li>
    );
}

