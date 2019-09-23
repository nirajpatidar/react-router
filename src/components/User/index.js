import React, { Component } from 'react';

import './user.css';
import {Card} from 'react-bootstrap';
class User extends Component {

    render() {
        const user = this.props.user;
        return (
            <Card className="user-card">
                <Card.Body>
                     <a href={`/user/${user.id}`}><h4>{user.username}</h4></a>
                     <div className="d-flex justify-content-between">
                        <div>Email</div>
                        <div>{user.email}</div>
                     </div>
                     <div className="d-flex justify-content-between">
                        <div>Phone</div>
                        <div>{user.phone}</div>
                     </div>
                </Card.Body>
            </Card>
        );
    }
}

export default User;