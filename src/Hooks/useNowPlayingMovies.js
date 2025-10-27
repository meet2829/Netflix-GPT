import { useEffect, useState } from "react";
import { options } from "../utils/Constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = (endpoint, action) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,
        options
      );
      const json = await data.json();
      console.log(`${endpoint} Movies:`, json.results);
      dispatch(action(json.results || []));
    } catch (error) {
      console.error(`Error fetching ${endpoint} movies:`, error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, [endpoint]);
  return { loading };
};
export default useNowPlayingMovies;