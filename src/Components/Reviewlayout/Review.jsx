import React, { useContext, useEffect, useState } from 'react';
import Ordersummary from '../Shoplayout/Ordersummary';
import {getcartproduct} from "../JSfunction"
import Reviewitem from './Reviewitem';
import { usercontext } from '../../App';

const Review = () => {
    const products = useContext(usercontext);
    const [cartitems, setCartitems] = useState([]);
    const [reloadcartitems , setreloadcart] = useState(false);

    useEffect(()=>{
        const items = getcartproduct(products);
        setCartitems(items);
    },[reloadcartitems])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
           <div className='col-span-2'>

                <div className='w-11/12 mx-auto my-10'>
                    {cartitems && cartitems.map((item,index)=><Reviewitem statevalue = {reloadcartitems} state = {setreloadcart} item ={item} key={index} />)}
                </div>

           </div>

           <Ordersummary buttonpath="/checkout" buttonname = "CheckOut Order" statevalue = {reloadcartitems} state = {setreloadcart} productdetalis ={cartitems && cartitems}/>

        </div>
    );
};

export default Review;