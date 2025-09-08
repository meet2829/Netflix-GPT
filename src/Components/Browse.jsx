import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import Banner from "../Cards/Banner";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/MovieSlice";
import MovieRow from "../Cards/MovieRow";
import GPTsearch from "./GPTsearchPage";


const Browse = () => {

  const ShowGptSearch = useSelector((store) => store.GPT.ShowGptSearch)

  const NowPlaying = useSelector((store) => store.movies.addNowPlayingMovies);
  const Popular = useSelector((store) => store.movies.popularMovies);
  const TopRated = useSelector((store) => store.movies.topRatedMovies);
  const upcoming = useSelector((store) => store.movies.upcomingMovies);

  const { loading: nowPlayingLoading } = useNowPlayingMovies("now_playing", addNowPlayingMovies);
  const { loading: popularLoading } = useNowPlayingMovies("popular", addPopularMovies);
  const { loading: topRatedLoading } = useNowPlayingMovies("top_rated", addTopRatedMovies);
  const { loading: upcomingLoading } = useNowPlayingMovies("upcoming", addUpcomingMovies);

  return (<>
  
    <div className="bg-black min-h-screen">
      <Header />

      {ShowGptSearch ? (
        <GPTsearch />
      ) : (
        <>
          {TopRated?.length > 0 && (
            <Banner movie={TopRated[Math.floor(Math.random() * TopRated.length)]} />
          )}
          <div className="relative z-20 mt-130">
            <MovieRow title="Now Playing" movies={NowPlaying} />
            <MovieRow title="Popular" movies={Popular} />
            <MovieRow title="Top Rated" movies={TopRated} />
            <MovieRow title="Upcoming" movies={upcoming} />
          </div>
        </>
      )}
    </div>
  </>)
}

export default Browse;
