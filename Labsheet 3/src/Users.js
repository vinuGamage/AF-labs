import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User';

class Users extends Component {

    static get PropTypes(){
        return{
            users: PropTypes.array
        }
    }

    constructor(props){
        super(props);
    }

    render() {
        const  {users} = this.props;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user=>{
                        return[
                            <User key={user.id} user={user}/>
                        ]
                    })}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Users;