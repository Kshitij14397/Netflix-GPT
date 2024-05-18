import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

// We are fetching the movies from API and storing it in a store.
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
