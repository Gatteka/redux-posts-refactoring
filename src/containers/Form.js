import {connect} from 'react-redux'
import Form from '../components/Form'

// get state from redux and map to properties of component
// check is filter active or not
const mapStateToProps = (state, ownProps) => ({
    //enabled: ownProps.enabled === state.enabled,
    status: getButtonStatus(state, ownProps),
    input: ownProps.input,
    area: ownProps.area,
    id: ownProps.id
});

function getButtonStatus(state, ownProps) {
    let result;
    console.log(state);
    console.log(ownProps);
    if (state) {
        result = state.button.filter(b => b.showElement === ownProps.id).pop();
    }
    return result;
    //  return [...state.button].pop();
}

export default connect(
    mapStateToProps,
)(Form)