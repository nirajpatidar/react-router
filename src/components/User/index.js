import React, { Component } from 'react';
import './user.css';

class User extends Component {

    render() {
        const user = this.props.user;
        return (
            <div className="card user-card">
                <div className="card-body">
                     <a href={`user/${user.id}`}><h4>{user.username}</h4></a>
                     <div className="d-flex justify-content-between">
                        <div>Email</div>
                        <div>{user.email}</div>
                     </div>
                     <div className="d-flex justify-content-between">
                        <div>Phone</div>
                        <div>{user.phone}</div>
                     </div>
                </div>
            </div>
        );
    }
}

export default User;