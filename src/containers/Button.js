import {connect} from 'react-redux'
import {showForm} from '../actions'
import Button from '../components/Button'


const mapStateToProps = (state, ownProps) => ({
    showElement: ownProps.showElement,
    enabled: buttonState(state, ownProps)
});

function buttonState(state, ownProps) {
    let buttonState = state.button.filter(b => b.showElement === ownProps.showElement).pop();
    if (!buttonState) {
        return
    }
    return buttonState.enabled
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(showForm(ownProps.showElement))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)