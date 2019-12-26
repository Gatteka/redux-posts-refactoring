import React from 'react'

const form = (state = [], action) => {
    // console.log(state);
    // console.log(action);
    let formElement = state.filter(b => b.showElement === action.showElement).slice(-1).pop();
    console.log(formElement);
    switch (action.type) {
        case 'SHOW_FORM':
            if (formElement) {
                return [{
                    showElement: action.showElement,
                    elementAction: 'createPost',
                    enabled: !formElement.enabled
                }];
            }
            return [...state,
                {
                    showElement: action.showElement,
                    elementAction: 'createPost',
                    enabled: true
                }
            ];

        case 'SHOW_UPDATE_FORM':
            if (formElement) {
                return [{
                    showElement: action.showElement,
                    elementAction: 'updatePost',
                    optionalState: {
                        id: action.id,
                        title: action.title,
                        text: action.text
                    },
                    enabled: !formElement.enabled
                }];
            }
            return [...state, {
                    showElement: action.showElement,
                    elementAction: 'updatePost',
                    optionalState: {
                        id: action.id,
                        title: action.title,
                        text: action.text
                    },
                    enabled: true
                }];
        default:
            return state
    }
};

export default form