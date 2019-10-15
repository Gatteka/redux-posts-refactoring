import React from 'react'

function Button({children, onClick,enabled}) {
console.log('BUTTONNN');
console.log(enabled);
    return (
        <button
            className={'ui button'}
            onClick={onClick}
        >{enabled ? "Hide Form": "Show Form" }</button>
    )
}

export default Button