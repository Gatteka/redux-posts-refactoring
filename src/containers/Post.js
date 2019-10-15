import {connect} from 'react-redux'
import Post from '../components/Post'

// get state from redux and map to properties of component
// check is filter active or not
const mapStateToProps = (state, ownProps) => ({
    title: ownProps.title,
    text: ownProps.text,
    id: ownProps.id
});

export default connect(
    mapStateToProps,
)(Post)