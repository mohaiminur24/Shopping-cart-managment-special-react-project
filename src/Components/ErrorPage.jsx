import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const {data,statusText,status} = error;
    return (
        <div className='w-full h-screen text-center flex justify-center items-center'>
            <div>
                <h1 className='text-4xl'>{status}</h1>
                <h3 className='text-red-600'>{statusText}</h3>
                <h3>{data}</h3>
            </div>
            
        </div>
    );
};

export default ErrorPage;