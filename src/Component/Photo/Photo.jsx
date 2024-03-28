import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../Photo/Photo.css'

const photo = ({photo}) => {
    const navigate = useNavigate();
    console.log(navigate);
    const {id, title, url, thambnailUrl} = photo;
    const handleShowDetail = () =>{
        navigate(`/Photo/${id}`);
    }
    return (
        <div className='border'>
            <p><small>{id}</small></p>
            <h1>{title}</h1>
            <p><small>{url}</small></p>
            <img src={url} alt="" />
            <button onClick={handleShowDetail}> click me </button>
        
        </div>
    );
};

export default photo;