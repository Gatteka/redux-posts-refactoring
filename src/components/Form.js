import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {createPost, updatePost} from '../actions'
import {Form as AreaForm, TextArea} from 'semantic-ui-react'
import Button from '../containers/Buttons/Button';
import {FormDataButton} from '../containers/Form';


/** Return main form with various buttons. Form can
 * create or update posts */
function Form({status = {enabled: false}}) {

    /** React Hooks */
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    let data = {
        title: title,
        text: text,
        id: status.optionalState ? status.optionalState.id : false,
    };

    /** React Hooks effects */
    useEffect(() => {
        if (status.optionalState) {
            setTitle(status.optionalState.title);
            setText(status.optionalState.text);
        }
    }, [status.optionalState]);


    function showText() {
        if (status.elementAction === 'updatePost') return FormDataButton.updatePost;
        if (status.elementAction === 'createPost') return FormDataButton.createPost;
    }

    return (
        <div className={'ui segment ' + (status.enabled ? 'normal' : 'hidden')}>
            <p>Post title</p>
            <div className={'ui input'}>
                <input className={'input'} value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <p>Post data</p>
            <AreaForm>
                <TextArea placeholder='Tell us more' value={text} onChange={e => setText(e.target.value)}/>
            </AreaForm>
            <div>
                <Button
                    data={data}
                    classes={'ui primary button'}
                    buttonText={showText()}
                    action={status.elementAction}
                />
            </div>
        </div>
    );
}

export default connect()(Form)