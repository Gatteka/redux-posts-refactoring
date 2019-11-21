import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {createPost, updatePost} from '../actions'
import {Form as AreaForm, TextArea} from 'semantic-ui-react'
import Button from '../containers/Buttons/Button';

/** Return main form with various buttons. Form can
 * create or update posts */
function Form({ status = {enabled: false}}) {

    console.log('__FORM__');
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
    }, [status.optionalState]);


    function showText() {
        if (status.elementAction === 'updatePost') return 'Update Post';
        if (status.elementAction === 'createPost') return 'Create Post';
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
                    title={title}
                    text={text}
                    classes={'ui primary button'}
                    buttonText={showText()}
                    id={ status.optionalState ? status.optionalState.id : false}
                    action={status.elementAction}
                />
            </div>
        </div>
    );
}
export default connect()(Form)