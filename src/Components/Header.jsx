import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [navtoggle, setNavtoggle] = useState(false);
    return (
        <div className='w-full flex justify-between items-center h-20 border-b relative'>
            <h1 className='text-2xl font-bold'>MMR <span className='text-yellow-500'>Shop</span></h1>
            <div className={`mr-[20%] md:block ${navtoggle?'absolute bg-gray-50 py-3 rounded-md block w-full top-24 bg-opacity-75 z-40':'hidden'}`}>
                <ul className={`flex gap-5 ${navtoggle?'flex-col':''} items-center font-semibold`}>

                    <li className='hover:scale-105 duration-200 hover:text-yellow-500'><NavLink  to="/" className={({isActive})=>isActive?"text-yellow-500":"text-black"} >Shop</NavLink></li>                    

                    <li className='hover:scale-105 duration-200 hover:text-yellow-500'><NavLink to="/review" className={({isActive})=>isActive?"text-yellow-500":"text-black"}>Review</NavLink></li>

                    <li className='hover:scale-105 duration-200 hover:text-yellow-500'><NavLink to="/checkout" className={({isActive})=>isActive?"text-yellow-500":"text-black"}>CheckOut</NavLink></li>

                    <li className='hover:scale-105 duration-200 hover:text-yellow-500'><NavLink to="/phone" className={({isActive})=>isActive?"text-yellow-500":"text-black"}>Phone</NavLink></li>
                    <li className='hover:scale-105 duration-200 hover:text-yellow-500'><NavLink to="/store" className={({isActive})=>isActive?"text-yellow-500":"text-black"}>Store</NavLink></li>
                </ul>
            </div>
            <FontAwesomeIcon onClick={()=> setNavtoggle(!navtoggle)} className='block md:hidden' icon={faBars}/>
        </div>
    );
};

export default Header;