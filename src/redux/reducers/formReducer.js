import {CHANGE_INPUT_FIELD} from '../constants';

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
export default nameInput;