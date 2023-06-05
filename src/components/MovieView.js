import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
        const { id } = useParams()

        const [movieDetails, setMovieDetails] = useState({})

        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=58507cc706ac67cc8ba97b098c38a449&language=en-US`)
                .then(Response => Response.json())
                .then(data => {
                    setMovieDetails(data)
                    setIsLoading(false)
                })
        }, [id])

        function renderMovieDetails() {
            if(isLoading) {
                return <Hero text="Loading..." />
            }
            if(movieDetails) {
                const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                    
                return (
                <div>
                    <Hero text={movieDetails.original_title} />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt='immm' className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                                <p className="lead">
                                    Release Date : {movieDetails.release_date}
                                </p>
                                <p className="lead">
                                    Genre : {movieDetails.genres[0]['name']}

                                </p>                                            
                            </div>

                        </div>

                    </div>

                </div>
            )
            }
        }

    return renderMovieDetails()
};

export default MovieView;