import React from 'react'

const button = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_FORM':
            let elementButton = state.filter(b => b.showElement === action.showElement).pop();
            if (elementButton) {
                return [{
                    showElement: action.showElement,
                    elementAction: 'create',
                    enabled: !elementButton.enabled
                }];
            }
            return [...state,
                {
                    showElement: action.showElement,
                    elementAction: 'create',
                    enabled: true
                }
            ];

        case 'SHOW_UPDATE_FORM':
            return [{
                showElement: 'form-element-1',
                elementAction: 'update',
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

export default button