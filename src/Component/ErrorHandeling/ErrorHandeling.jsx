import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ErrorHandeling = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oooops!!</h1>
            <p><small>{error.statusText || error.message}</small></p>
            {
                error.ststus = 404 && <div>
                    <h3>Page note Found</h3>
                    <p><small>Go back Home</small></p>
                    <Link to="/"> <button className="btn btn-primary">Home</button> </Link>
                </div>
            }
        </div>
    );
};

export default ErrorHandeling;