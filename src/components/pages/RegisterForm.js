import React, {useState} from 'react'
import {Form, Input} from 'semantic-ui-react'

/**
 * Registration/Login Form
 */
function RegisterForm(props) {
let isRegister = props.action === 'register';
    const fields = isRegister ? {
        firstName: 'firstName',
        lastName: 'lastName',
        password: 'password',
        email: 'email',
        terms: 'terms',
    } : {
        password: 'password',
        email: 'email',
        };

    console.log(props);

    const [formState, setFormState] = useState([]);

    /**
     * Need to check when hook formState changed and it's reliable to check data from it
     */
    const [fieldsChecked, setFieldsChecked] = useState(false);

    /**
     *  Add or update object in formState []
     *  with validated error state;
     */
    function addValue(key, value) {
        setFormState(
            [...formState.filter(el => el.key !== key),
                {
                    key: key,
                    value: value,
                    error: retrieveErrors(key, value)
                }
            ]
        );
    }

    function hasErrors(key) {
        let element = formState.filter(el => el.key === key).pop();
        if (element) return element.error;
    }

    /**
     * Submit form action: checking required fields and redirecting if
     * no errors found in  checking[] and formState[]
     */
    function submitForm() {
        let checking = [];
        for (let field in fields) {
            if (formState.filter(el => el.key === field).length === 0) {
                checking.push({
                    key: field,
                    value: '',
                    error: retrieveErrors(field, 0)
                });
            }
        }
        if (!fieldsChecked) {
            if (checking.filter(el => el.error !== false).length < 1) {
                window.location.href = "/mainPage"
            }
        } else {
            if (formState.filter(el => el.error !== false).length < 1) {
                window.location.href = "/mainPage"
            }
        }
        setFormState([...formState, ...checking]);
        setFieldsChecked(true);

    }


    function retrieveErrors(key, value) {
        if (!value || value.length < 1) {
            return {
                content: 'this is required field',
                pointing: 'left'
            };
        }
        switch (key) {
            case fields.firstName:
                if (value.length < 2) {
                    return {
                        content: 'Not enough characters',
                        pointing: 'left'
                    };
                }
                if (!value.match( /^[a-z ,.'-]+$/i)) {
                    return {
                        content: 'Incorrect name. Use only characters',
                        pointing: 'left'
                    };
                }
                return false;
            case fields.lastName:
                if (value.length < 2) {
                    return {
                        content: 'Not enough characters',
                        pointing: 'left'
                    };
                }
                if (!value.match( /^[a-z ,.'-]+$/i)) {
                    return {
                        content: 'Incorrect name. Use only characters',
                        pointing: 'left'
                    };
                }
                return false;
            case fields.password:
                if (value.length < 4) {
                    return {
                        content: 'Not enough characters',
                        pointing: 'left'
                    };
                }
                return false;
            case fields.terms:
                if (!value) {
                    return {
                        content: 'You must agree to the terms and conditions',
                        pointing: 'left'
                    };
                }
                return false;
            case fields.email:
                if (!value.match('^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$')) {
                    return {
                        content: 'Incorrect email address',
                        pointing: 'left'
                    };
                }
                return false;
            default:
                return false
        }
    }

    /**
     * Return Form Popup for registration or login depends on prop action
     */
    if (props.action === 'register') {
        return (
            <Form id={'register-ui-form'}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        width={8}
                        error={hasErrors(fields.firstName)}
                        onChange={e => addValue(fields.firstName, e.target.value)}
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        error={hasErrors(fields.lastName)}
                        control={Input}
                        width={8}
                        onChange={e => addValue(fields.lastName, e.target.value)}
                        label='Last name'
                        placeholder='Last name'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        id='form-input-control-password'
                        error={hasErrors('password')}
                        control={Input}
                        width={8}
                        onChange={e => addValue('password', e.target.value)}
                        label='Password'
                        type='password'
                        placeholder='password'
                    />
                    <Form.Field
                        id='form-input-control-email'
                        error={hasErrors('email')}
                        control={Input}
                        width={8}
                        onChange={e => addValue('email', e.target.value)}
                        label='Email address'
                        type='email'
                        placeholder='email'
                    />
                </Form.Group>
                <Form.Field>
                    <Form.Checkbox
                        onClick={(e, {checked}) => addValue(fields.terms, checked)}
                        error={hasErrors(fields.terms)}
                        label='I agree to the Terms and Conditions'
                    />
                </Form.Field>
                <Form.Button
                    content='Submit'
                    onClick={() => submitForm()}
                />
            </Form>
        )
    }
    return (
        <Form id={'register-ui-form'}>
            <Form.Group>
                <Form.Field
                    id='form-input-control-last-name'
                    error={hasErrors('email')}
                    control={Input}
                    width={8}
                    onChange={e => addValue('email', e.target.value)}
                    label='Email address'
                    type='email'
                    placeholder='email'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    error={hasErrors('password')}
                    control={Input}
                    width={8}
                    onChange={e => addValue('password', e.target.value)}
                    label='Password'
                    type='password'
                    placeholder='password'
                />
            </Form.Group>
            <Form.Field>
            </Form.Field>
            <Form.Button
                content='Submit'
                onClick={() => submitForm()}
            />
        </Form>
    )
}

export default RegisterForm