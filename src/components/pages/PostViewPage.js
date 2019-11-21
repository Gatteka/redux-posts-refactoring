import React, {useState} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import 'react-fontawesome';
import {Button as UiButton} from 'semantic-ui-react'
import Header from './Header';

/** Home page  */
function PostViewPage({state}) {
    console.log(state);
    if (!state) {
       // window.location.href = "/";
    }
    return (
        <div className="App">
            <Header>
                <Link to="/">
                    <UiButton>Back</UiButton>
                </Link>
            </Header>
            <br/>
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">{state.title}</h2>
                <p>{state.text}</p>
            </div>
        </div>
    );
}

export default PostViewPage;
