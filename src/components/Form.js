import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {sendForm, showForm, updatePost} from '../actions'
import {Form as AreaForm, TextArea} from 'semantic-ui-react'


/** Return main form with various buttons. Form can
 * create or update posts */

function Form({dispatch, status = {enabled: false}}) {
    console.log('__FORM____');
    console.log(status);

    /** React Hooks */
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    /** React Hooks effects */
    useEffect(() => {
        if (status.optionalState) {
                setTitle(status.optionalState.title);
                setText(status.optionalState.text);
        }
    },[status.optionalState]);

    return (
        <div className={'ui segment' + " " + (status.enabled ? 'normal' : 'hidden')}>
            <p>Post title</p>
            <div className={'ui input'}>
                <input className={'input'} value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <p>Post data</p>
            <AreaForm>
                <TextArea placeholder='Tell us more' value={text} onChange={e => setText(e.target.value)}/>
            </AreaForm>
            <div>
                <CurrentButton
                    dispatch={dispatch}
                    status={status}
                    title={title}
                    text={text}
                    optionalState={status.optionalState}
                />
            </div>
        </div>
    );
}

/** Return 'Create Post' or 'Update post' buttons in Form view */

function CurrentButton({dispatch, status, title, text}) {
    if (status && status.elementAction === 'create') {
        return (
            <button
                type="submit"
                className={'ui primary button'}
                onClick={e => {
                    e.preventDefault();
                    dispatch(sendForm(title, text));
                    dispatch(showForm(status.showElement));
                }}>
                Create Post
            </button>
        );
    }
    return (
        <button
            type="submit"
            className={'ui primary button'}
            onClick={e => {
                e.preventDefault();
                dispatch(updatePost(title, text, status.optionalState.id));
            }}>
            Update Post
        </button>
    );
}

export default connect()(Form)