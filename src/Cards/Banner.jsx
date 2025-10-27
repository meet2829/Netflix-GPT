import React, { useEffect, useState } from "react";
import { options } from "../utils/Constant";

const Banner = ({ movie }) => {
  if (!movie) return null;

  const [trailerKey, setTrailerKey] = useState(null);

  const GetMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
        options
      );
      const json = await data.json();
      const trailer = json.results.find((video) => video.type === "Trailer");
      if (trailer) setTrailerKey(trailer.key);
    } catch (err) {
      console.error("Error fetching trailer:", err);
    }
  };

  useEffect(() => {
    GetMovieVideo();
  }, []);

  return (
    <div className="absolute h-screen w-full text-white bg-gradient-to-t from-black via-transparent to-black opacity-80 -mt-10">
      
      <iframe
        className="relative top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playlist=${trailerKey}&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 "></div>

      <div className="absolute bottom-80 left-10 max-w-xl z-10">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-lg mb-6 line-clamp-3">{movie.overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200">
            ▶ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 px-6 py-2 rounded font-semibold hover:bg-gray-600">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
