import React from 'react';
import '../../App.css';
import Form from '../../containers/Form';
import Button from '../../containers/Buttons/Button';
import PostList from '../../containers/PostList';
import 'react-fontawesome';
import Header from './Header';


/** Home page  */
function MainPage() {
    return (
        <div className="App">
            <Header>
                <Button
                buttonText={'Show Form'}
                action={"showForm"}
                showElement={'form-element-1'}
            />
            </Header>
            <Form id={'form-element-1'}/>
            <PostList/>
        </div>
    );
}

export default MainPage;
