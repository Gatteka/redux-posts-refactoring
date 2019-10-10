import React from 'react';
import '../App.css';
import Form from '../containers/Form';
import Button from '../containers/Button';
import PostList from '../containers/PostList';

function App() {
    return (
        <div className="App">
            <Button showElement={'form-element-1'}>Click Here</Button>
            <br/>
            <Form id={'form-element-1'}/>
            <PostList/>
        </div>
    );
}

export default App;
