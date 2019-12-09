import {connect} from "react-redux";
import React from 'react'
import Post from '../containers/Post';

/**
 *  if filter.type is 'deleted' it will be filter where post.deleted === true
 * (show all deleted posts from allPosts)
 *
 * */
function PostList({allPosts,filter}) {
    console.log(filter);
    let deleted = filter.type === 'deleted';
    console.log(deleted);
    return (
        <ul className={'list ui grid'}>
            {allPosts.filter(post => post.deleted === (deleted)).map(post => (
                <div className="two wide column post-items">
                    <Post key={post.id} id={post.id} title={post.title} text={post.text} className={deleted ?
                        ' deleted-post ui segment' : 'ui segment'} />
                </div>
            ))}
        </ul>
    );
}

export default connect()(PostList)