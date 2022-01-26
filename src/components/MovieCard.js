export const MovieCard = ({data,urlLink}) => {
    return (
        <div className="movie">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={data.poster_path ? urlLink+data.poster_path: 'https://static.bond.edu.au/sites/default/files/styles/full_width/public/cinema%20750x320.jpg?itok=U8R3z3ov'} alt={data.title}/>
                  <div className="movie-info">
                    <h3>{data.title}</h3>
                    <span>{data.vote_average}</span>
                  </div>
                </div>
                <div className="movie-overview">
                  <h2>Overview</h2>
                  <p>{data.overview}</p>
                </div>
              </div>
            </div>
    )
}
