import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from '../../components/Header';
import Users from '../Users';
import Posts from '../Posts';
import Navigation from '../Navigation';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Route exact path="/" component={Posts} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={Users} />
                <Route path="/nav" component={Navigation}/>
            </React.Fragment>
        );
    }
}

export default Blog;