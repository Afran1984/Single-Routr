// import React from 'react';
// import Address from '../Address/Address';

// const User = ({user}) => {
//     console.log(user);
//     const {name, username, email, address} = user;
//     const {cityy} = address.city;
//     console.log(cityy)
//     return (
//         <div>
//             <h1>Name: {name}</h1>
//             <p>UserName:{username}</p>
//             <h4>Email: {email}</h4>
//             <p>Address:{cityy}
//                 {/* {
//                     address.map((holdNo, Index) => <Address holdNo={holdNo} key={Index}></Address>)
//                 } */}
//             </p>
//         </div>
//     );
// };

// export default User;


import React from 'react';
import './user.css'
import { Link } from 'react-router-dom';
const User = ({ user }) => {
    console.log(user);
    const {id, name, username, email, phone,} = user;


    return (
        <div className='border font-mono'>
            <h1 className='text-3xl font-mono'>Name: {name}</h1>
            <p className=''>UserName:{username}</p>
            <p>Phone:{phone}</p>
            <h4>Email: {email}</h4>
            <Link className='text-slate-400' to={`/user/${id}`} >
                <button className='bg-slate-400 text-black rounded-xl p-3'>Click-Me</button>
            </Link>
        </div>
    );
};

export default User;
