import React from 'react';
import axios from "axios";

const Home = () => {
    const API_KEY = '6CZQC9K-5FK47GX-NG6TQKM-QNDRC63!';
    const API_URL_MOVIE_DETAILS = 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=30';
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios
            .get(API_URL_MOVIE_DETAILS, {
                headers: {
                    'X-API-KEY': API_KEY,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                setMovies(response.data.docs);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(movies)

    return (
        <div>
            {
                movies.map((movie, index) => (
                    <div key={index}>
                        <img style={{width: 200}} src={movie.poster.url} alt="" />
                        <div>
                            <h2>{movie.name}</h2>
                            <p>{movie.description}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Home;