import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo'
import '../Photos/Photos.css'

const Photos = () => {
    const photos = useLoaderData();
    console.log(photos);
    return (
        <div className='grid grid-cols-3 gap-4 border'>
            {
                photos.map(photo => <Photo photo={photo} key={photo.id}></Photo>)
                
            }
        </div>
    );
};

export default Photos;