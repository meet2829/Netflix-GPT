import React, { useState } from "react";
import { Star } from "lucide-react"; 
import MovieModal from "../Components/MovieModel";


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="bg-gray-900 text-white rounded-2xl overflow-auto shadow-lg w-65 hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          src={`${IMG_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold truncate">{movie.title}</h2>
          <p className="text-sm text-gray-400">Release: {movie.release_date}</p>
          <div className="flex items-center space-x-1 text-yellow-400">
            <Star className="w-4 h-4 fill-yellow-400" />
            <span>{movie.vote_average.toFixed(1)}</span>
            <span className="text-gray-400">({movie.vote_count})</span>
          </div>
          <p className="text-sm text-gray-300 line-clamp-3">
            {movie.overview}
          </p>
        </div>
      </div>
      {showModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default MovieCard;
