import {
    CHANGE_INPUT_FIELD,
    REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCESS,
    REQUEST_USERS_FAILED
} from '../constants';

export const nameForm = (text) =>{
    return{
    type: CHANGE_INPUT_FIELD,
    payload: text
}
}

export const requestUsers = () => dispatch =>{
    dispatch({type:  REQUEST_USERS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({type: REQUEST_USERS_SUCESS, payload:data}))
    .catch(error => dispatch({type: REQUEST_USERS_FAILED, payload:error}))
}