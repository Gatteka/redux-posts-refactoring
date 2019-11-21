import React from 'react';
import '../../App.css';
import 'react-fontawesome';

/** Home page  */
function Header(props) {
    return (
        <div id={"Header"}>
            <div id={'user-area'} className={'ui segment'}>
                <p id={'user-name'}>Username</p>
                {props.children}
            </div>
        </div>
    );
}

export default Header;
