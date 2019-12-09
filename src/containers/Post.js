import {connect} from 'react-redux'
import Post from '../components/Post'

/**
 *  ownProps - current data from (PostList) component props (in fields)
 *  data - it's will go to the component to be rendered
 *  */

function mapStateToProps(state, ownProps) {
    return {
       data: {
           title: ownProps.title,
           text: ownProps.text,
           id: ownProps.id,
           className: ownProps.className
       }
    }
}

export default connect(
    mapStateToProps,
)(Post)