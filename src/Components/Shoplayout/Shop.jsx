import React, { useEffect, useState, useContext } from 'react';
import Product from './Product';
import {getcartproduct} from "../JSfunction";
import Ordersummary from './Ordersummary';
import LoadingPage from '../LoadingPage';
import { usercontext } from '../../App';
import { useNavigation } from 'react-router-dom';

const Shop = () => {

    const products = useContext(usercontext);

    const navigation = useNavigation();
    if(navigation.state == "loading"){
        return <LoadingPage/>
    };

    const [cartitems, setCartitems] = useState([]);
    const [reloadcartitems , setreloadcart] = useState(false);
    useEffect(()=>{
        const getcartitems = getcartproduct(products && products);
        setCartitems(getcartitems);
    },[reloadcartitems])
    return (
        <div className='grid md:grid-cols-5 grid-cols-1 gap-5 relative'>
      
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10 col-span-3 lg:col-span-4'>
            {products && products.map((product,index)=><Product statevalue = {reloadcartitems} state = {setreloadcart} key={index} product={product}/>)}
            </div>

            <div className='col-span-2 lg:col-span-1'>
                <Ordersummary buttonpath="/review" buttonname = "Review Order" statevalue = {reloadcartitems} state = {setreloadcart} productdetalis ={cartitems && cartitems}></Ordersummary>
            </div>
        </div>
    );
};

export default Shop;