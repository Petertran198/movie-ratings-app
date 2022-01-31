import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    let { imdbID } = useParams();

    return <div>MovieDetails</div>;
}
