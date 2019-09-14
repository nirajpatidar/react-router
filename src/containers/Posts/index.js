import React, { Component } from 'react';
import Post from '../../components/Post';
import axios from 'axios';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            this.setState({
                posts: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {

        const posts = this.state.posts;
        let post = posts.map(item => {
            return <Post post={item}/>
        });
        return (
            <div className="row">
                <div className="col-12">
                {post}     
                </div>
                
            </div>
        );
    }
}

export default Posts;