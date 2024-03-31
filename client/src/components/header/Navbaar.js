import React from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
    return (
       <header>
        <nav>
            <div className="left">
                <div className="navlogo">
                <NavLink to='/'>    <img src="./amazon_PNG25.png" alt=''/> </NavLink>
                </div>
                <div className='nav_searchbar'>
                    <input type='text' name='' id=''/>
                    <div className='search_icon'>
                        <SearchIcon id="search" />
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='nav_btn'>
                    <NavLink to='/login'>signin</NavLink>
                </div>
                <div className='cart_btn'>
                    {/* Use ShoppingCartIcon directly without Badge for now */}
                    <ShoppingCartIcon id="icon"/>
                    <p>Cart</p>
                </div>
                <Avatar className='avatar'/>
            </div>
        </nav>
       </header>
    )
}

export default Navbaar