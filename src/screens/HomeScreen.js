import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
// import RBCarousel from "react-bootstrap-carousel";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {getNowPlaying} from '../api/movie'
// import { MovieCard } from '../components/MovieCard';

const imageUrl = "https://image.tmdb.org/t/p/original";

const HomeScreen = () => {
    const [movies , setMovie] = useState([])

    useEffect(() => {
        getNowPlaying().then((res) => {
            setMovie(res.data.results);
          });
    },[])

    // const nowPlaying = movies.map(ele =>{
    //     console.log('ele',ele);
    //     return (
    //         <div style={{ height: 500, width: "100%" }} key={ele.id}>
    //     <div className="carousel-center">
    //       <img style={{ height: 600 }} src={`${imageUrl}${ele.poster_path}`} alt={ele.title} />
    //     </div>
    //     <div className="carousel-center">
    //       <i
    //         className="far fa-play-circle"
    //         style={{ fontSize: 95, color: "#f4c10f" }}
    //       ></i>
    //     </div>
    //     <div
    //       className="carousel-caption"
    //       style={{ textAlign: "center", fontSize: 35 }}
    //     >
    //       {ele.title}
    //     </div>
    //   </div>
    //         )
    // })

    const handleClick = (e) => {
        console.log(e.target.id);
        // gethMovieDetail(e.target.id)
        
    }
    
    
    return (<>

        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={20}
        isPlaying
        interval={3000}
        visibleSlides={4}
        infinite={true}
        
      >
        <Slider>
        {movies.map((ele,index) => {

            return (
                <Slide key={index} onClick={handleClick}><div>
                <Link to={`/movie/${ele.id}`}>

                 <img src={`${imageUrl}${ele.poster_path}`} style={{height: 250,width: 150, margin: 1}} alt={ele.title} id={ele.id}/>
                </Link>
                 <div>

                    {ele.title}
                 </div>
                </div> </Slide>
            
          );
        })}
        </Slider>

      </CarouselProvider>
    </>
    )
}

export default HomeScreen
