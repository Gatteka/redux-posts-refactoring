import React from 'react'
import uuid from 'uuid/v4';

const posts = (state = [], action) => {
    switch (action.type) {
        case 'SEND_FORM':
            console.log(state);
            if (action.input && action.text) {
                return [
                    ...state,
                    {
                        id: uuid(),
                        title: action.input,
                        text: action.text
                    }
                ];
            }
            return state;
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.id);
        case 'UPDATE_POST':
            console.log('UPDATE_POST');
            if (action.text && action.title) {
                state = state.filter(post => post.id !== action.id);
                console.log(state);
                console.log(action);
                return  [
                    ...state,
                    {
                        id: action.id,
                        title: action.title,
                        text: action.text
                    }
                ];
            }
        default:
            return state
    }
};

export default posts