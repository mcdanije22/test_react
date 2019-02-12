import {CHANGE_INPUT_FIELD} from '../constants';

export const nameForm = (text) =>{
    console.log(text)
    return{
    type: CHANGE_INPUT_FIELD,
    payload: text
}
}
