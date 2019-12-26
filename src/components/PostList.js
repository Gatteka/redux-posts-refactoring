import {connect} from "react-redux";
import React from 'react'
import Post from '../containers/Post';
import uuid from 'uuid/v4';

/**
 *  if filter.type is 'deleted' it will be filter where post.deleted === true
 * (show all deleted posts from allPosts)
 *
 * */
function PostList({allPosts, filter}) {
    console.log(filter);

    let deleted = (filter.type === 'deleted');
    let filteredPosts = allPosts.filter(post => post.deleted === deleted);

    return (
        <ul className={'list ui grid'}>
            {
                filteredPosts.map(post => (
                    <div className="two wide column post-items">
                        <Post key={uuid()} id={post.id} title={post.title}
                              text={post.text} className={deleted ? ' deleted-post ui segment' : 'ui segment'}/>
                    </div>
                ))
            }
        </ul>
    );
}

export default connect()(PostList)