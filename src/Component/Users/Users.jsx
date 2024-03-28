import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Users:{users.length}</h1>
            <div className='grid grid-cols-3 m-4 gap-3 border-double'>
                {
                    users.map(user => <User user ={user} key={user.id}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;