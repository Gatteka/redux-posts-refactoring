import React from 'react'
import uuid from 'uuid/v4';

const form = (state = [], action,) => {
    switch (action.type) {
        case 'SEND_FORM':
            console.log('form-----');
            console.log(state);
            console.log(action);
            if (action.input && action.area) {
                return [
                    ...state,
                    {
                        id: uuid(),
                        title: action.input,
                        text: action.area
                    }
                ];
            }
        default: return state
    }
};

export default form