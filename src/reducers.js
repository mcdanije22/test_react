import actions from './actions';
import {CHANGE_INPUT_FIELD} from './constants';

const intialState = {
    name:''
}

export const nameInput = (state =intialState, action) =>{
    switch(action.type){
        case CHANGE_INPUT_FIELD :
        return Object.assign({}, state,{name:action.payload})
        default:
        return state;
    }
}