import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const handleChange = e => ({
     type: 'HANDLE_CHANGE',
     payload: e.target.value
})

const intialState = {
    username : ''
}

const rootReducer = (state = intialState, action ) => {
    switch(action.type){
        case 'HANDLE_CHANGE' :{
            return {
                ...state,
                username: action.payload
            }
        }
        default: return state;
    }
}

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);