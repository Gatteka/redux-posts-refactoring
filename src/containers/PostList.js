import React from 'react'
import {connect} from 'react-redux'
import PostList from '../components/PostList'

const mapStateToProps= (state) => ({
    allPosts: state.posts,
    filter: state.postsFilter
});

export default connect(
    mapStateToProps,
)(PostList)