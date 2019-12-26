import {connect} from 'react-redux'
import PostViewPage from '../../components/pages/PostViewPage'

/**
 retrieve from posts (by postViewPage id) that we need to show in postViewPage
 */
function mapStateToProps(state) {
    console.log(state);

    let postViewDataId = state.postViewPage.slice(-1).pop().id;
    return {
        state: state.posts.filter(post => post.id === postViewDataId).pop()
    }
}

export default connect(
    mapStateToProps,
)(PostViewPage)