import {connect} from 'react-redux'
import PostViewPage from '../../components/pages/PostViewPage'

/**
 * Get state from redux and map to properties of component
 *
 *  status - it's Form prop.
 * getButton will return some kind of state for this prop.
 */
function mapStateToProps(state) {
    return {
        state: state.postViewPage.pop()
    }
}

export default connect(
    mapStateToProps,
)(PostViewPage)