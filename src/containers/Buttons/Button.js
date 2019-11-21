import {connect,} from 'react-redux'
import {
    deletePost,
    createPost,
    showForm,
    showUpdateForm,
    updatePost,
    showPostDetail
} from '../../actions'
import Button from '../../components/Buttons/Button'
import {put, takeEvery} from 'redux-saga/effects'
import action from '../../index'

function mapStateToProps(state, ownProps) {
    return {
        classes: ownProps.classes,
        result: getButtonText(state, ownProps),
    }
}

function getButtonText(state, ownProps) {
    if (!ownProps.showElement) {
        return ownProps.buttonText
    }
    let formState = state.form.filter(v => v.showElement === ownProps.showElement).pop();
    if (!formState) {
        return ownProps.buttonText
    }
    return formState.enabled ? "Hide Form" : "Show Form"
}

function* hide() {
    yield put(showForm('form-element-1'))
}

export function* doubleAction() {
    yield takeEvery('CREATE_POST', hide)
}

/** mapDispatchToProps
 * adds event to our prop. We can use it from Button component as well. */
function mapDispatchToProps(dispatch, ownProps) {

    return {
        onClick() {
            let action = ownProps.action;
            switch (action) {
                case 'showForm':
                    return dispatch(showForm(ownProps.showElement));
                case 'createPost':
                    return dispatch(createPost(ownProps.title, ownProps.text));
                case 'deletePost':
                    return dispatch(deletePost(ownProps.id));
                case 'updatePost':
                    return dispatch(updatePost(ownProps.title, ownProps.text, ownProps.id));
                case 'showUpdateForm':
                    return dispatch(showUpdateForm(ownProps.data));
                case 'showPostDetail':
                    return dispatch(showPostDetail(ownProps.data));
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)