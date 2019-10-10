import React from 'react'
import {connect} from 'react-redux'
import PostList from '../components/PostList'

const mapStateToProps= (state, ownProps) => ({
    allPosts: state.form
});

export default connect(
    mapStateToProps,
)(PostList)