import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import Youtube from "react-youtube";
import  movieTrailer  from "movie-trailer";


const basr_url = "https://image.tmdb.org/t/p/original/";


function MyRow({ title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    /* slick settings */
    const settingsSlider = {
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows:false,
        responsive: [{
            breakpoint: 1024,
            settings:{
                slidesToShow: 4,
                slidesToScroll: 4,
            },
            breakpoint: 768,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    }

    /* option for youtube */
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    /* fetch movies */
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            /*  set data to movies */
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    /* get id form url trailer */
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || movie.title || "").then(url => {
                const urlParam = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParam.get("v"));
                console.log(urlParam)
            }).catch((err) => console.log(err))
        }
    }

    
    return (
        <div className="myrow">
            <h1>{title}</h1>
            <div className="row-posters">
                <Slider {...settingsSlider}>
                    {/* map all movies in row */}
                {movies.map( movie => (
                        <img
                        onClick={() => handleClick(movie)}
                        className={`row-poster ${isLargeRow && "row-poster-large"}`}
                        key={`${movie.id}`}
                        src={`${basr_url}${isLargeRow ? movie.poster_path : movie.backdrop_path} `}
                        alt={`${basr_url}${movie.title}`}/>
                        ))}
                </Slider>
                {/* youtube trailer */}
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>

            {/* <div className="row-posters">
            </div> */}
        </div>
    )
}

export default MyRow;
