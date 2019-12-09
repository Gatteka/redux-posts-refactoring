import React from 'react'
import {connect} from "react-redux";
import {showPostDetail} from "../actions";
import {Popup, Button as UiButton, Grid} from 'semantic-ui-react'
import Button from '../containers/Buttons/Button';
import {Link} from "react-router-dom";

/** Post component */
function Post({dispatch, data, className = 'ui segment'}) {

    return (
        <div className={className}>

            <h4 id={'post-title'}>{data.title}</h4>
            <p id={'post-text-content'}>{data.text}</p>
            <div id={'post-buttons'}>
                <UiButton.Group>
                <Button
                    action={'deletePost'}
                    buttonText={'DELETE'}
                    id={data}
                />
                <UiButton.Or />
                <UpdateShowPopup dispatch={dispatch} data={data}/>
                </UiButton.Group>
            </div>
        </div>
    );
}

/** Button with popup options */
function UpdateShowPopup({data}) {
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
                        data={data}
                    />
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Link to="/post">
                        <Button
                            action={'showPostDetail'}
                            buttonText={'Show'}
                            classes={'ui floated  button'}
                            data={data}
                        />
                    </Link>
                </Grid.Column>
            </Grid>
        </Popup>
    );
}


export default connect()(Post)