import {connect} from 'react-redux'
import Form from '../components/Form'

/**
 * Get state from redux and map to properties of component
 *
 *  status - it's Form prop.
 * getButton will return some kind of state for this prop.
 * */
const mapStateToProps = (state, ownProps) => ({
    status: getData(state, ownProps),
});

function getData(state, ownProps) {
    return state.form.filter(b => b.showElement === ownProps.id).pop();
}

export default connect(
    mapStateToProps,
)(Form)


/**
 * Button text for
 *
 * src/containers/Buttons/Button.js
 */
export const FormDataText = {
    hideForm: 'Hide Form',
    showForm: 'Show Form'
};

/**
 * Button text for
 *
 * src/components/Form.js
 */
export const FormDataButton = {
    updatePost: 'Update Post',
    createPost: 'Create Post'
};
