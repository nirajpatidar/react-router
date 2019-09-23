import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import NavHome  from '../../components/NavHome/index';
import NavHomeId  from "../../components/NavHomeId/index";
import Team  from '../../components/Team/index';

class Navigation extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div>
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/nav/navHome">nav home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/nav/navHome/2" eventKey="link-1">nav home id</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  href="/nav/navHome/3/team" eventKey="link-2">nav home id team</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="/navHome/:id/team/:id">
                            Nav Home id team id
                        </Nav.Link>
                    </Nav.Item> */}
                </Nav> 
                <div className="container">
                    <Switch>
                        <Route exact path="/nav/navHome" component={NavHome}/>
                        <Route exact path="/nav/navHome/:id" component={NavHomeId}/>
                        <Route exact path="/nav/navHome/:id/team" component={Team}/>
                        {/* <Route path="/navHome" component={NavHome}/> */}

                    </Switch>
                </div>               
            </div>
        );
    }
}

export default Navigation;