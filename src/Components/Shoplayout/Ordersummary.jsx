import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Ordersummary = ({productdetalis,state,statevalue,buttonname,buttonpath}) => {
    
    const totalitems = productdetalis && productdetalis.reduce((prev,current)=>(current.Quantity)+prev,0)
    const totalprice = productdetalis && productdetalis.reduce((prev,current)=>((current.price)*(current.Quantity))+prev,0)
    const totaltax = (totalprice*2)/100;
    const totalpriceaftertax = totalprice-totaltax;

    return (
        <div className='bg-gray-100 h-fit my-10 p-5 rounded-sm sticky top-5'>
                <div><Toaster/></div>
                <h1 className='border-b text-center font-bold py-2'>Order Summary</h1>
                <div className='my-5 font-semibold'>
                    <h1>Total Order: <span className='ml-2'>{totalitems ? totalitems : 0}</span></h1>
                    <h1>Tax: <span className='ml-2'>{totaltax ? totaltax.toFixed(2): 0}</span></h1>
                    <h1>Price without tax: <span className='ml-2'>{totalprice ? totalprice.toFixed(2):0}</span></h1>                    
                </div>
                <h1 className='font-bold'>After Price: <span className='ml-3'>${totalpriceaftertax ? totalpriceaftertax.toFixed(2):0}</span></h1>
                <button className='w-full py-2 mt-3 rounded-md border-yellow-500 border font-semibold mx-auto'onClick={()=>{localStorage.clear('cartitems'),state(!statevalue),
                toast.success('Succesfully clear your cart.', {
                    style: { 
                      padding: '16px',
                      color: 'black',
                      boxShadow:'0px 0px 1px gray',
                      borderRadius:"3px"
                    },
                    iconTheme: {
                      primary: 'red',
                      secondary: 'white',
                    },
                  });
                }}>Clear Cart</button>
                <Link to={buttonpath}><button className='w-full mt-1 py-2 rounded-md font-semibold mx-auto bg-yellow-500'>{buttonname}</button></Link>
        </div>
    );
};

export default Ordersummary;