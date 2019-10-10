import { connect } from 'react-redux'
import { showForm } from '../actions'
import Button from '../components/Button'

// get state from redux and map to properties of component
// check is filter active or not
const mapStateToProps = (state, ownProps) => ({
    showElement: ownProps.showElement,
    // enabled: ownProps.enabled === state.enabled
});

//here we set filter from our props(in FilterLink component) to method setVisibilityFilter
//this method will be dispatched when we click to Link component
const mapDispatchToProps = (dispatch,ownProps) => ({
    onClick: () => dispatch(showForm(ownProps.showElement))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)