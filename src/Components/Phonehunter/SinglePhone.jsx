import React from 'react';
import { Link } from 'react-router-dom';

const SinglePhone = ({item}) => {
    const {brand,image,phone_name,slug} = item;
    return (
        <div className='border rounded-md p-5'>
            <img className='mx-auto' src={image} alt="" />
            <h1 className='font-semibold mt-5'>Brand Name: {brand}</h1>
            <h2 className='font-bold text-lg'>Phone Model: {phone_name}</h2>

            <Link to={`/phone/${slug}`}>
            <button className='border px-5 py-2 mt-5 rounded-md font-semibold hover:scale-105 text-sm'>More Details</button>
            </Link>
        </div>
    );
};

export default SinglePhone;