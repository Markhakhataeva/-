import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {thunk} from "redux-thunk";
import {usersReducer} from "./users";
import {todosReducer} from "./todos";


const logger=createLogger({
    collapsed: true,
    diff:true
});

const rootReducer=combineReducers({
    users:usersReducer,
    todos:todosReducer

})

export const store=createStore(rootReducer,applyMiddleware(thunk,logger))