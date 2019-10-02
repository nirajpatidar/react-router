import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";;

class Navigation extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div>
                <Nav activeKey="/home" className="flex-column">
                    <Nav.Item>
                        <Link className="nav-link" to="/nav/navHome">Nav Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/nav/navHome/2">Nav Home id</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/nav/navHome/3/team">Nav Home Team</Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link href="/navHome/:id/team/:id">
                            Nav Home id team id
                        </Nav.Link>
                    </Nav.Item> */}
                </Nav> 
                              
            </div>
        );
    }
}

export default Navigation;