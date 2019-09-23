import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './post.css';
class Post extends Component {

    render() {
        return (
            <Card className="card-post">
                <Card.Body className="card-body">
                     <h4>{this.props.post.title}</h4>
                     <p>{this.props.post.body}</p>
                </Card.Body>
            </Card>
        );
    }
}

export default Post;