import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import user from '../../common/images/user.png';
export default function Header() {
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <div>Movie Ratings</div>
            </Link>
            <img src={user} className='user-image' alt='user portfolio' />
        </div>
    );
}
