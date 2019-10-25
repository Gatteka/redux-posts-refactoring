import {connect} from 'react-redux'
import Form from '../components/Form'

/**
 * Get state from redux and map to properties of component
 *
 *  status - it's Form prop.
 * getButton will return some kind of state for this prop.
 * */
const mapStateToProps = (state, ownProps) => ({
    status: getButton(state, ownProps),
});

function getButton(state, ownProps) {
    return state.form.filter(b => b.showElement === ownProps.id).pop();
}

export default connect(
    mapStateToProps,
)(Form)