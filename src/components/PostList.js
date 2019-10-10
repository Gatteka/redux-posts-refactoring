import {connect} from "react-redux";
import React from 'react'
import Post from '../containers/Post';

function PostList({allPosts}) {

    return (
        <ul className={'list'}>
            {allPosts.map(post => (
                <Post key={post.id} title={post.title} text={post.text}/>
            ))}
        </ul>
    );
}

export default connect()(PostList)