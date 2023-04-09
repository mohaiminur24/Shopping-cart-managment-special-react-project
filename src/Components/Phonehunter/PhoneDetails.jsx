import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PhoneDetails = () => {
    const navigation = useNavigate();
    const {data} = useLoaderData();
    const {brand,image,name,} = data;
    
    
    return (
        <div className='flex flex-col md:flex-row w-4/5 min-h-[calc(100vh-200px)] mx-auto gap-5 justify-center items-center my-10'>
            <img src={image} alt="" />
            <div className=''>
                <h5 className='font-semibold text-xl mb-3'>Model: <span>{brand && brand} {name && name}</span></h5>
                <h5 className='font-semibold'>Chipset: <span className='font-thin'>{data?.mainFeatures?.chipSet}</span></h5>
                <h5 className='font-semibold'>Display Size: <span className='font-thin'>{data?.mainFeatures?.displaySize}</span></h5>
                <h5 className='font-semibold'>Memory: <span className='font-thin'>{data?.mainFeatures?.memory}</span></h5>
                <h5 className='font-semibold'>Sensor: <span className='font-thin'>{data?.mainFeatures?.sensors && data?.mainFeatures?.sensors.map((sensor,idx)=> <span key={idx}>{sensor}, </span>)}</span></h5>
                <h5 className='font-semibold'>Bluetooth: <span className='font-thin'>{data?.others?.Bluetooth}</span></h5>
                <h5 className='font-semibold'>GPS: <span className='font-thin'>{data?.others?.GPS}</span></h5>
                <h5 className='font-semibold'>NFC: <span className='font-thin'>{data?.others?.NFC}</span></h5>
                <h5 className='font-semibold'>Radio: <span className='font-thin'>{data?.others?.Radio}</span></h5>
                <h5 className='font-semibold'>USB: <span className='font-thin'>{data?.others?.USB}</span></h5>
                <h5 className='font-semibold'>WLAN: <span className='font-thin'>{data?.others?.WLAN}</span></h5>

                <button onClick={()=> navigation(-1)} className='text-sm p-5 py-2 rounded-md mt-5 hover:scale-105 text-white bg-yellow-600'>Back Phone store</button>
            </div>
        </div>
    );
};

export default PhoneDetails;