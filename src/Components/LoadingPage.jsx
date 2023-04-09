import React from 'react';

const LoadingPage = () => {
    return (
        <div className='w-full h-96 flex flex-col justify-center items-center'>
            <div className='w-20 h-20 border-8 border-red-600 border-dashed rounded-full animate-spin'></div>
            <h1 className='mt-5 animate-pulse'>Loading Data</h1>
        </div>
    );
};

export default LoadingPage;