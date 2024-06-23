import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "../redux/action";
import {useParams} from "react-router-dom";
import {Todo} from "./Todo";

export const Todos = (props) =>{
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const {id}=useParams()

    useEffect(() => {
        if (id !== undefined){
            dispatch(loadTodos(id))
        }
    },[id])


    return (
        <ul>
            {
                todos.map(todo =>{
                    return <Todo key={todo.id} todo={todo}/>
                })
            }
        </ul>
    );
}
