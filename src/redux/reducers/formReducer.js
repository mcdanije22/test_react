import {
    CHANGE_INPUT_FIELD,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCESS,
    REQUEST_USERS_FAILED
} from '../constants';

const initialState = {
    name:''
}

export const nameInput = (state =initialState, action={}) =>{
    switch(action.type){
        case CHANGE_INPUT_FIELD :
        return {
            ...state,
            name:action.payload
        };
        // Object.assign({}, state,{name:action.payload})
        default:
        return state;
    }
};

const initialStateUsers = {
    isPending: false,
    users: [],
    error: ''
}
export const requestUsers = (state = initialStateUsers, action={})=>{
    switch(action.type){
        case REQUEST_USERS_PENDING:
        return{
            ...state,
            isPending:true
        }
        case REQUEST_USERS_SUCESS:
        return{
            ...state,
            users:action.payload,
            isPending:false
        }
        case REQUEST_USERS_FAILED:
        return{
            ...state,
            error:action.payload, isPending:false
        }
        default:
        return state
    }
}
