import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Users from '../Users';
import Posts from '../Posts';
import Navigation from '../Navigation';
import NavHome  from '../../components/NavHome/index';
import NavHomeId  from "../../components/NavHomeId/index";
import Team  from '../../components/Team/index';

import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="wrapper">
                    <div className="sidebar">
                         <Navigation/>
                    </div>
                    <div className="content">
                    <Switch>
                        <Route exact path="/" component={Posts} />
                        <Route path="/users" component={Users} />
                        <Route path="/user/:id" component={Users} />
                       
                        
                        
                        <Route exact path="/nav/navHome" component={NavHome}/>
                        <Route exact path="/nav/navHome/:id" component={NavHomeId}/>
                        <Route exact path="/nav/navHome/:id/team" component={Team}/>
                            {/* <Route path="/navHome" component={NavHome}/> */}

                    </Switch>
                 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;