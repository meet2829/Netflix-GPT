import React from "react";
import MovieCard from "../Cards/MovieCard";

const MovieRow = ({ title, movies }) => {
  return (<>

   <h2 className="text-3xl font-bold text-white mb-4 mt-4 px-4">{title}</h2>
    <div className="mb-10 mt-10 flex overflow-x-scroll">
      <div className="flex  gap-4 px-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
 </> );
};
export default MovieRow;
