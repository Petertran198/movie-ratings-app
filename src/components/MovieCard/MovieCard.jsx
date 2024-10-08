import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './movieCard.css';
export default function MovieCard(props) {
    let { data } = props;
    return (
        <div>
            {' '}
            <Link to={`/movie/${data.imdbID}`} style={{ textDecoration: 'none' }}>
                <div className='card-item'>
                    <div className='card-inner'>
                        <div className='card-top'>
                            <img src={data.Poster} />
                        </div>
                        <div className='card-bottom'>
                            <div className='card-info'>
                                <h4>{data.Title}</h4>
                                <p>{data.Year}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
