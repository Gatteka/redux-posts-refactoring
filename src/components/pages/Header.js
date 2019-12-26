import React from 'react';
import '../../App.css';
import 'react-fontawesome';
import Form from "../../containers/Form";

/** Home page  */
function Header(props) {
    return (
        <div>
        <div id={"Header"}>
            <div id={'user-area'} className={'ui segment'}>
                <p id={'user-name'}>Username</p>
                {props.children}
            </div>
        </div>
        <Form id={'form-element-1'}/>
        </div>
    );
}

export default Header;
