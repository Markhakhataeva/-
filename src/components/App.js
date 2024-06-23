import React, {useEffect} from 'react';
import {Users} from "./Users";
import {useDispatch} from "react-redux";
import {loadUsers} from "../redux/action";
import {Todos} from "./Todos";
import {Route, Routes} from "react-router-dom";

export const App = (props) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadUsers());
    },[])



    return (
        <Routes>
            <Route path="/:id?" element={
                <div>
                    <Users/>
                    <Todos/>
                </div>}>
            </Route>

        </Routes>

    );
}
