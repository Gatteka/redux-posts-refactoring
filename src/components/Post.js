import React from 'react'
import {connect} from "react-redux";
import {showPostDetail} from "../actions";
import {Popup, Button as UiButton, Grid} from 'semantic-ui-react'
import Button from '../containers/Buttons/Button';
import {Link} from "react-router-dom";

/** Post component */
function Post({dispatch, data}) {

    return (
        <div className={'ui segment'}>
            <h4 id={'post-title'}>{data.title}</h4>
            <p id={'post-text-content'}>{data.text}</p>
            <div id={'post-buttons'}>
                <Button
                    action={'deletePost'}
                    buttonText={'DELETE'}
                    id={data.id}
                />
                <UpdateShowPopup dispatch={dispatch} data={data}/>
            </div>
        </div>
    );
}

/** Button with popup options */
function UpdateShowPopup({dispatch,data}) {
    return (
        <Popup
            trigger={<UiButton>. . .</UiButton>}
            flowing hoverable>
            <Grid centered divided columns={2}>
                <Grid.Column textAlign='center'>
                    <Button
                        action={'showUpdateForm'}
                        buttonText={'UPDATE'}
                        classes={'ui right floated  button'}
                        title={data.title}
                        text={data.text}
                        id={data.id}
                    />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                        <UiButton
                            onClick={e => {
                                e.preventDefault();
                                dispatch(showPostDetail(data.id, data.title, data.text));
                            }}
                        >
                            <Link to="/post">SHOW</Link>
                        </UiButton>
                </Grid.Column>
            </Grid>
        </Popup>
    );
}


export default connect()(Post)