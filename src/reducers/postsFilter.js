import React from 'react'

const postsFilter = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER':
            console.log(state);
            if (action.filter) {
                return {
                       type: action.filter
                    };
            }
            return state;

        default:
            return state
    }
};

export default postsFilter