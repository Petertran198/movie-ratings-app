import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './movieDetail.css';
import {
    fetchSelectedMoviesOrShows,
    getSelectedMoviesOrShow,
    removeOldSelectedMoviesOrShow,
} from '../../features/movies/moviesSlice';
export default function MovieDetail() {
    //Get id
    let { imdbID } = useParams();

    const selectedMovieOrShow = useSelector(getSelectedMoviesOrShow);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSelectedMoviesOrShows(imdbID));

        //Cleanup
        return dispatch(removeOldSelectedMoviesOrShow());
    }, [imdbID, dispatch]);

    return (
        <div className='movie-section'>
            {Object.keys(selectedMovieOrShow).length === 0 ? (
                <div className='loading'>...Loading</div>
            ) : (
                <>
                    <div className='section-left'>
                        <div className='movie-title'>
                            {selectedMovieOrShow.Title}
                        </div>
                        <div className='movie-rating'>
                            <span>
                                IMDB Rating <i className='fa fa-star'></i> :{' '}
                                {selectedMovieOrShow.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className='fa fa-thumbs-up'></i> :{' '}
                                {selectedMovieOrShow.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className='fa fa-film'></i> :{' '}
                                {selectedMovieOrShow.Runtime}
                            </span>
                            <span>
                                Year <i className='fa fa-calendar'></i> :{' '}
                                {selectedMovieOrShow.Year}
                            </span>
                        </div>
                        <div className='movie-plot'>{selectedMovieOrShow.Plot}</div>
                        <div className='movie-info'>
                            <div>
                                <span>Director</span>
                                <span>{selectedMovieOrShow.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{selectedMovieOrShow.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{selectedMovieOrShow.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{selectedMovieOrShow.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{selectedMovieOrShow.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className='section-right'>
                        <img
                            src={selectedMovieOrShow.Poster}
                            alt={selectedMovieOrShow.Title}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
