import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const intialState = {
    username : '',
    events: [],
    loggedIn: false
}

const rootReducer = (state = intialState, action ) => {
    switch(action.type){
        case 'HANDLE_CHANGE' :
            return {
                ...state,
                username: action.payload
            }
        case "LOGIN":
            return {
                ...state,
                loggedIn: true,
                events: action.payload
            }
        default: return state;
    }
}

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);