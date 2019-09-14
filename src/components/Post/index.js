import React, { Component } from 'react';
import './post.css';
class Post extends Component {

    render() {
        return (
            <div className="card card-post">
                <div className="card-body">
                     <h4>{this.props.post.title}</h4>
                     <p>{this.props.post.body}</p>
                </div>
            </div>
        );
    }
}

export default Post;