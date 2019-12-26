import React from 'react'

const postViewPage = (state = [], action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case 'SHOW_POST_DETAIL_PAGE':
            return [{
                id: action.id,
                title: action.title,
                text: action.text
            }];
        default:
           return state
    }
};

export default postViewPage