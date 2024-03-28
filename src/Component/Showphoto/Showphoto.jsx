import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Showphoto = () => {
    const Showing = useLoaderData();
    console.log(Showing);
    const {id, title, url, thambnailUrl} = Showing;
    console.log(id);
    const navigate = useNavigate();

    const showDitels = () =>{
        navigate(-1);
    }
    return (
        <div className='justify-center'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{thambnailUrl}</p>
      <p><small>{id}</small></p>
      <button onClick={showDitels} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Showphoto;