import React from 'react';

const Itemcheckout = ({items}) => {
    const {Quantity,image,name,price} =items;
    return (
        <>
            <tr className='shadow-sm'>
                <td><img className='w-32 h-auto my-1 block rounded-md border' src={image} alt="" /></td>
                <td className='font-semibold'>{name}</td>
                <td>{Quantity}</td>
                <td>${price}</td>
            </tr>
            
        </>
    );
};

export default Itemcheckout;