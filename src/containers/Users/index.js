import React, { Component } from 'react';
import axios from 'axios';
import User from '../../components/User';
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            this.setState({
                users: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {
        const users = this.state.users;
        let user = users.map(item => {
            return <User user={item}/>
        });
        return (
            <div className="row">
                <div className="col-12">
                {user}     
                </div>
                
            </div>
        );
    }
}

export default Users;