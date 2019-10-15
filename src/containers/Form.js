import {connect} from 'react-redux'
import Form from '../components/Form'

// get state from redux and map to properties of component
// check is filter active or not
const mapStateToProps = (state, ownProps) => ({
    //enabled: ownProps.enabled === state.enabled,
    status: getButton(state, ownProps),
    // input: ownProps.input,
    // text: ownProps.text,
    // id: ownProps.id,
});

function getButton(state, ownProps) {
    console.log(ownProps);
    return state.button.filter(b => b.showElement === ownProps.id).pop();
}

export default connect(
    mapStateToProps,
)(Form)