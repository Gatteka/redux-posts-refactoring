
import React from 'react'
import {connect} from "react-redux";

function Post({title, text}) {
    console.log(title);
    console.log(text);
    return (
        <div className={'post'}>
            <div>
            <button className={'postDelete'}>X</button>
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}

export default connect()(Post)