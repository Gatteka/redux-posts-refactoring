import React from 'react'

const button = (state = [], action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            console.log('button');
               let button = state.filter(b => b.showElement === action.showElement).pop();

               if(button) {
                   console.log(state);

                   // return [ ...state,
                   //     {
                   //         showElement: action.showElement,
                   //         enabled: !button.enabled
                   //     }
                   // ];
                   return [{
                           showElement: action.showElement,
                           enabled: !button.enabled
                       }];
               }
                //  state.map(button => button.id === action.id ? button.enabled = !button.enabled : button);
                // return state;
            console.log(state);
            return [ ...state,
                {
                    showElement: action.showElement,
                    enabled: true
                }
            ];

        default:
            return state
    }
};

export default button