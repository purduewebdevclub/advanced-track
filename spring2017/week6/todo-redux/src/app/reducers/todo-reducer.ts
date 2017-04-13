import { Action } from '@ngrx/store';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export function todoReducer(state = [], action: Action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload //appends current payload to state
            ];
        case UPDATE_TODOS: 
            return [
                ...action.payload
            ];
        default:
            return state;
    }
}