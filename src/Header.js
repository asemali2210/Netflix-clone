import React, { useState, useEffect } from 'react'
import axios from "./axios";
import requests from './requests';


function Header() {

    const [movie, setMovie] = useState([]);

    /* style random background image */
    let StyleBackGround = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
    }

    /* fetch movie poster */
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1 )
            ])
            return request;
        }
        fetchData();
    }, [])

    
    return (
        <div className="banner" style={StyleBackGround}>
            <div className="banner-content">
                <h2>{movie.title || movie.original_name || movie.title }</h2>
                <div className="banner-buttons">
                    <button>Play It</button>
                    <button>My lists</button>
                </div>
                <div className="banner-description">
                    <p>{movie.overview}</p>
                </div>
                <div className="banner-fade"></div>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Header;
