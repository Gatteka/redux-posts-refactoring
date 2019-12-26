import React from 'react'
import uuid from 'uuid/v4';

const posts = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_POST':
            if (action.title && action.text) {
                return [
                    ...state,
                    {
                        id: uuid(),
                        deleted:false,
                        title: action.title,
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
            console.log(state);
            console.log(action);
            if (action.text && action.title) {
                console.log(state);
                console.log(action);
                return  [
                    ...state.filter(post => post.id !== action.id),
                    {
                        id: action.id,
                        title: action.title,
                        text: action.text,
                        deleted: false
                    }
                ];
            }
        default:
            return state
    }
};

export default posts