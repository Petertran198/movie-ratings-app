import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import user from '../../common/images/user.png';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movies/moviesSlice';
export default function Header() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();
        if (search == '') {
            alert('Please enter a search term');
            return;
        }
        dispatch(fetchMovies(search));
        dispatch(fetchShows(search));
        setSearch('');
    };
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <div>Movie Ratings</div>
            </Link>
            <form onSubmit={handleSearch} className='form'>
                <input
                    type='text'
                    value={search}
                    className='input-field'
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search for Movies/Shows'
                />
                <button type='submit' className='btn'>
                    Search
                </button>
            </form>
            <img src={user} className='user-image' alt='user portfolio' />
        </div>
    );
}
