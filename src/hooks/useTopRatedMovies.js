import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

// We are fetching the movies from API and storing it in a store.
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addTopRatedMovies(movies.results));
  };

  useEffect(() => {
    topRatedMovies();
  }, []);
};

export default useTopRatedMovies;
