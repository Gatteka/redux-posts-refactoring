import React from 'react';

function Button({onClick,result,classes}) {
    return (
        <button
            className={classes ? classes : 'ui button'}
            onClick={onClick}>
            {result}</button>
    )
}

export default Button