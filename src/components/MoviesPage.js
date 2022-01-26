import React, { useEffect, useState } from "react";
import { getMovies,getSearchMovies } from "../api/movie";
import { MovieCard } from "./MovieCard";
// import ReactCardFlip from "react-card-flip";
import "./MoviesPage.css";

const imageUrl = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  // const [flipped, setFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies().then((res) => {
      setMovieList(res.data.results);
    });
  }, []);

  console.log("movieList", movieList);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setFlipped(!flipped);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    getSearchMovies(searchTerm)
    .then(res=> {
      setMovieList(res.data.results);
    })
    .catch(e=>{
      console.log("fetxhing data error :" , e)
    })

  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit} value={searchTerm}>
        <input className="search" type="search" placeholder="search..." onChange={handleChange}/>

        </form>
      </header>

      <div className="movie-container">
        {movieList.map((ele) => {
          return (
            <MovieCard data={ele} urlLink={imageUrl} key={ele.id}/>
          );
        })}
      </div>
    </>
  );
};

export default MoviesPage;

//         <ReactCardFlip isFlipped={flipped} flipDirection="vertical" key={ele.id}>
//     <div className='card__front'>
//       This is the front of the card.
//       <button onClick={handleClick}>Click to flip</button>
//     </div>

//     <div className='card__back'>
//       This is the back of the card.
//       <button onClick={handleClick}>Click to flip</button>
//     </div>
//   </ReactCardFlip>

// {
//   /* <div className="container-fluid d-flex justify-content-center">
//       <div className="row">
//         {movieList.map((ele) => {
//           return (
//               <div className="col-md-4">
//             <ReactCardFlip
//               isFlipped={flipped}
//               flipDirection="vertical"
//               key={ele.id}
//             >
//               <div className="card text-center" onClick={handleClick}>
//                 <div className="overflow">
//                   <img src={`${imageUrl}${ele.poster_path}`} alt="" className="card-img-top" />
//                 </div>
//                 <div className="card-body text-dark">
//                   <h4 className="card-title">Card Title</h4>
//                   <p className="card-text text-secondary">Loremsadasdasd</p>
//                   <a href="#" className="btn btn-outline-success">
//                     GO THERE
//                   </a>
//                 </div>
//               </div>
//               <div onClick={handleClick}>
//                 This is the back of the card.
//               </div>
//             </ReactCardFlip>
//             </div>
//           );
//         })}
//       </div>
//     </div> */
// }



{/* <div className="movie">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={`${imageUrl}${ele.backdrop_path}`} alt={ele.title}/>
                  <div className="movie-info">
                    <h3>{ele.title}</h3>
                    <span>{ele.vote_average}</span>
                  </div>
                </div>
                <div className="movie-overview">
                  <h2>Overview</h2>
                  <p>{ele.overview}</p>
                </div>
              </div>
            </div> */}