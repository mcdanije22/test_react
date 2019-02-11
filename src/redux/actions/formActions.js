import {CHANGE_INPUT_FIELD} from '../constants';

export const nameForm = (text) =>({
    type: CHANGE_INPUT_FIELD,
    payload: text
})

