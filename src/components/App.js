import React from 'react';
import '../App.css';
import Form from '../containers/Form';
import Button from '../containers/Button';
import PostList from '../containers/PostList';
import 'react-fontawesome';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
        <div className="App">
            <div id={"Header"}>
                <div id={'user-area'} className={'ui segment'}>
                    <p id={'user-name'}>Username</p>
                    <Button showElement={'form-element-1'}>Button</Button>
                </div>
            </div>
            <Form id={'form-element-1'}/>
            <PostList/>
        </div>
        </Router>
    );
}

export default App;
