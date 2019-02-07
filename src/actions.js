import {CHANGE_INPUT_FIELD} from './constants';

export const userInputField = (text) =>({
    type: CHANGE_INPUT_FIELD,
    payload: text
})