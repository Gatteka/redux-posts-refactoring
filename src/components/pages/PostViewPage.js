import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import 'react-fontawesome';
import Header from './Header';
import Button from '../../containers/Buttons/Button';

/**
 *
 * @param state
 * @returns {*}
 * @constructor
 */
function PostViewPage({state = false}) {
     console.log(state);
    return (
        <div className="App">
            <Header>
                <Link to="/">
                    <Button
                        buttonText={'Back'}
                        classes={'button-create ui button'}
                    >Back</Button>
                </Link>
                <Button
                    action={'showUpdateForm'}
                    buttonText={'Update'}
                    showElement={'form-element-1'}
                    classes={'button-create ui button'}
                    data={state}
                />
            </Header>
            <br/>
            {
                state ?
                <div className="ui raised very padded text container segment">
                    <h2 className="ui header">{state.title}</h2>
                    <p>{state.text}</p>
                </div>
                : <div className="ui raised very padded text container segment">
                    <p>This post is not available</p>
                </div>
            }
        </div>
    );
}

export default PostViewPage;
