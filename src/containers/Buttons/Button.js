import {connect,} from 'react-redux'
import {
    deletePost,
    createPost,
    showForm,
    showUpdateForm,
    updatePost,
    showPostDetail,
    setPostsFilter
} from '../../actions'
import Button from '../../components/Buttons/Button'
import {put, takeEvery} from 'redux-saga/effects'
import {FormDataText} from  '../Form'

function mapStateToProps(state, ownProps) {
    return {
        classes: ownProps.classes,
        result: getButtonText(state, ownProps),
    }
}

/**
 * Set text for "show/hide form" button
 * ( if this button have prop 'showElement')
 *
 * @param state
 * @param ownProps
 * @returns {string|*}
 */
function getButtonText(state, ownProps) {

    if (!ownProps.showElement) {
        return ownProps.buttonText
    }
    let formState = state.form.filter(v => v.showElement === ownProps.showElement).pop();
    if (!formState) {
        return ownProps.buttonText
    }
    return formState.enabled ? FormDataText.hideForm : ownProps.buttonText
}

function* hide() {
    yield put(showForm('form-element-1'))
}

export function* doubleAction() {
    yield takeEvery('CREATE_POST', hide);
    yield takeEvery('UPDATE_POST', hide);
}

/**
 *
 * mapDispatchToProps
 * adds event to our prop. We can use it from Button component as well.
 *
 * @param dispatch
 * @param ownProps
 * @returns {{onClick(): (*|*|*|*|*|*|*)}|*}
 */
function mapDispatchToProps(dispatch, ownProps) {

    return {
        onClick () {
            let action = ownProps.action;
            switch (action) {
                case 'showForm':
                    return dispatch(showForm(ownProps.showElement));
                case 'createPost':
                    return dispatch(createPost(ownProps.data));
                case 'deletePost':
                    return dispatch(deletePost(ownProps.id));
                case 'updatePost':
                    return dispatch(updatePost(ownProps.data));
                case 'showUpdateForm':
                    return dispatch(showUpdateForm(ownProps.data,ownProps.showElement));
                case 'showPostDetail':
                    return dispatch(showPostDetail(ownProps.data));
                case 'setPostsFilter':
                    return dispatch(setPostsFilter(ownProps.filter));
                default:
                    return false;
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)