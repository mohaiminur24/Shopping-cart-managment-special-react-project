import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SinglePhone from './SinglePhone';
import LoadingPage from '../LoadingPage';

const Phonehunter = () => {

    const navigation = useNavigation();
    if(navigation.state == "loading"){
        return <LoadingPage/>
    };

    const [product, setProduct] = useState([]);
    const [search , setSearch] = useState("iphone");

    useEffect(()=>{
        const datafetch = async(search) =>{
                const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`);
                const data = await res.json();
                setProduct(data.data);
        };
        datafetch(search);
    },[search])

    return (
        <>
        <div className='w-full my-10 text-center'>
            <input onChange={(event)=>{setSearch(event.target.value ? event.target.value: "iphone")}} className='border w-2/5 py-2 text-center outline-none border-gray-300 shadow-sm rounded-md' type="text" placeholder='Search your own phone'/>
            <h3 className='text-gray-400 text-sm my-5'>Displaying : {search}</h3>
        </div>

        {product.length<1 && <h1 className='text-center font-bold text-2xl text-red-500'>No Data Found!</h1>}

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-5'>
            {product && product.map((item,index) => <SinglePhone key={index} item={item}/>)}
        </div>
        </>
    );
};

export default Phonehunter;