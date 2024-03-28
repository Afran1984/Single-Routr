// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Address = () => {
//     const ditels = useLoaderData();
//     console.log(ditels);
//     const {name, username} = ditels;
//     console.log(name);
//     return (
//         <div>
//             <h2>name:{name}</h2>
//         </div>
//     );
// };

// export default Address;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Address.css'
import { Link } from 'react-router-dom';

const Address = () => {
    const ditels = useLoaderData();

    // Check if ditels is not undefined and if name property exists
    if (!ditels || !ditels.name) {
        return <div>Loading...</div>;
    }

    // Now, we can be sure that ditels and ditels.name are defined
    const { name, email } = ditels;

    return (
        <div>
            <div className='User' >
            <h2>Name: {name}</h2>
            <p>{email}</p>
            </div>
            <Link to="/users">
            <button className='bg-slate-400 text-black rounded-xl p-3'>Back</button>
            </Link>

        </div>
    );
};

export default Address;
