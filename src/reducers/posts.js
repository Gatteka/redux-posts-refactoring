import React from 'react'
import uuid from 'uuid/v4';

const posts = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log(state);
            if (action.input && action.text) {
                return [
                    ...state,
                    {
                        id: uuid(),
                        deleted:false,
                        title: action.input,
                        text: action.text
                    }
                ];
            }
            return state;

        case 'DELETE_POST':
           // return state.filter(post => post.id !== action.id);
            return [
                ...state.filter(post => post.id !== action.data.id),
                {
                    id: action.data.id,
                    deleted:true,
                    title: action.data.title,
                    text: action.data.text
                }
            ];

        case 'UPDATE_POST':
            if (action.text && action.title) {
                state = state.filter(post => post.id !== action.id);
                console.log(state);
                console.log(action);
                return  [
                    ...state['active'],
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