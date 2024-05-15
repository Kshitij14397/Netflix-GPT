import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

// We are fetching the movies from API and storing it in a store.
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
