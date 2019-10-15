import React from 'react'
import {connect} from "react-redux";
import {deletePost, showUpdateForm} from "../actions";
import {Button, Popup, Grid} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function Post({dispatch, title, text, id}) {
    console.log("__POST__");
    return (
        <div className={'ui segment'}>
            <h4 id={'post-title'}>{title}</h4>
            <p id={'post-text-content'}>{text}</p>
            <div id={'post-buttons'}>
                <div className={'ui right floated  button'}
                     onClick={e => {
                         e.preventDefault();
                         dispatch(deletePost(id));
                     }}>
                    <div className="visible content">Delete</div>
                </div>
                    <Popup
                        trigger={<Button className={'ui right floated  button'}>. . .</Button>}
                        flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Button
                                    onClick={e => {
                                        e.preventDefault();
                                        dispatch(showUpdateForm(id, title, text));
                                    }}
                                >Update</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Button>Show</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
            </div>

        </div>
    );
}

export default connect()(Post)