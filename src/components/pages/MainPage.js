import React from 'react';
import '../../App.css';
import Form from '../../containers/Form';
import Button from '../../containers/Buttons/Button';
import PostList from '../../containers/PostList';
import 'react-fontawesome';

/** Home page  */
function MainPage() {
    return (
        <div className="App">
            <div id={"Header"}>
                <div id={'user-area'} className={'ui segment'}>
                    <p id={'user-name'}>Username</p>
                    <Button
                        buttonText={'Show Form'}
                        action={"showForm"}
                        showElement={'form-element-1'}
                    >Show Form</Button>
                </div>
            </div>
            <Form id={'form-element-1'}/>
            <PostList/>
        </div>
    );
}

export default MainPage;
