import React, {useState} from 'react'
import {connect} from 'react-redux'
import {sendForm, showForm} from '../actions'

function Form({dispatch, status = {enabled: false}}) {
    let input = '';
    const [value, setValue] = useState("");
    const [area, setArea] = useState("");
    console.log(status);
    return (
        <div className={'form' + " " + (status.enabled ? 'normal' : 'hidden')}>
            <br/>
            <div>
                <input className={'input'} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div>
                <textarea className={'input'} value={area} onChange={e => setArea(e.target.value)}/>
            </div>
            <div>
                <button
                    type="submit"
                    className={'button'}
                    onClick={e => {
                        e.preventDefault();
                        dispatch(sendForm(value, area));
                        dispatch(showForm(status.showElement));
                    }}
                >Create
                </button>
            </div>
        </div>
    );
}

export default connect()(Form)