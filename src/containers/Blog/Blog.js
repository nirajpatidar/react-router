import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../../components/Header';
import Users from '../Users';
import Posts from '../Posts';
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                
                <Route exact path="/" component={Posts} />
                <Route path="/users" component={Users} />
                
            </React.Fragment>
        );
    }
}

export default Blog;