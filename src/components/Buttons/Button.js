import React from 'react';
import {showForm} from "../../actions";

function Button({onClick,result,classes}) {
    return (
        <button
            className={classes ? classes : 'ui button'}
            onClick={onClick}>
            {result}</button>
    )
}

export default Button