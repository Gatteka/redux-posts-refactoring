import React, {useState} from 'react'
import { Button as UiButton, Confirm as PopUp } from 'semantic-ui-react'
import RegisterForm from './RegisterForm'

function StartPage () {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('');
    const [result, setResult] = useState('show the modal to capture a result');

    return (
        <div className="App">
        <div className={'ui segment'}>
                <p>
                    Result: <em>{result}</em>
                </p>
                <UiButton onClick={function(){ setOpen('true'); setAction('login')}}>Login</UiButton>
                <UiButton onClick={function(){ setOpen('true'); setAction('register')}}>Register</UiButton>

                <PopUp
                    open= {open}
                    content= {<RegisterForm action={action}/>}
                    confirmButton= {false}
                    cancelButton= {
                        <UiButton onClick={() => setOpen(false)}>Back</UiButton>
                    }
                />
            </div>
        </div>
        )

}

export default StartPage