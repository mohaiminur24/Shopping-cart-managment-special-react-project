import React from 'react';
import {setCartItemLocalstorage} from '../JSfunction';
import toast, { Toaster } from 'react-hot-toast';



const Product = ({product,state,statevalue}) => {
    
    const {name,image,id,color,date,price,rating,stock} = product;
    return (
        <div className='flex flex-col border p-5 rounded-md shadow-md'>
            <div><Toaster/></div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h2>Publish Date: {date}</h2>
            <h2>Rating: {rating}</h2>
            <h3>Color: {color}</h3>
            <h1 className='mb-2'>Price: ${price}</h1>
            <h4 className='mt-auto font-bold'>{!stock && "Out of stock"}</h4>
            { stock && <button className='px-5 py-2 mt-auto bg-yellow-500 w-fit rounded-md text-white hover:scale-105 duration-200' onClick={()=>{setCartItemLocalstorage(id),state(!statevalue),toast.success('Successfully Added!',{
                style:{
                    boxShadow:'0px 0px 1px gray',
                    borderRadius:"3px"
                }
            })
            }}>Buy Now</button>}
            
        </div>
    );
};

export default Product;