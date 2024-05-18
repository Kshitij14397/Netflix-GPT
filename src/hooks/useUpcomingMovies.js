import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

// We are fetching the movies from API and storing it in a store.
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addUpcomingMovies(movies.results));
  };

  useEffect(() => {
    upcomingMovies();
  }, []);
};

export default useUpcomingMovies;
