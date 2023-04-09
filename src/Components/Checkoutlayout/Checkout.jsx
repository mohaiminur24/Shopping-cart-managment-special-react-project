import React, { useContext } from 'react';
import { getcartproduct } from "../JSfunction"
import Itemcheckout from './Itemcheckout';
import { usercontext } from '../../App';

const Checkout = () => {
    const products = useContext(usercontext);
    const cartitems = getcartproduct(products);
    const totalprice = cartitems && cartitems.reduce((prev,current)=> ((current.price)*current.Quantity)+prev ,0)

    return (
        <div className='my-5 w-full'>
            <div className='w-4/5 mx-auto'>
                <h1 className='text-center font-bold text-3xl'>Your Order <span className='text-yellow-500'>CheckOut</span></h1>

                {cartitems ? 
                
                <div className='w-full my-10'>
                    <table className='w-full table-auto'>
                        <thead className='font-bold border-b'>
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Quantity</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {cartitems && cartitems.map((item,index) => <Itemcheckout key={index} items ={item}/> )}
                            
                        </tbody>

                    </table>

                    <h1 className='font-bold text-2xl text-right my-5 p-5'>Your Total Price is : ${totalprice.toFixed(2)}</h1>
                </div>

               

                :

                <h1 className='text-center my-10 text-red-500 font-bold'>No cart Data Found !</h1>
                
                }
                


            </div>
        </div>
    );
};

export default Checkout;