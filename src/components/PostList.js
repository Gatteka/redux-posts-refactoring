import {connect} from "react-redux";
import React from 'react'
import Post from '../containers/Post';

function PostList({allPosts}) {

    return (
        <ul className={'list ui grid'}>
            {allPosts.map(post => (
                <div className="two wide column">
                    <Post key={post.id} id={post.id} title={post.title} text={post.text}/>
                </div>
            ))}
        </ul>
    );
}

export default connect()(PostList)