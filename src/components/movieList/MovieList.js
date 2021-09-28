import React, { useContext, useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import AppContext from "../../context";
import MoviesData from "../../data/movies.json";
import { getTag } from "../../features/tags/tagsSlice";
import { useSelector } from "react-redux";

export default function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const [tagData, setTagData] = useState({});
  const tagState = useSelector(getTag);
  const API_URL = "https://my.api.mockaroo.com/movies.json?key=3bc829b0";
  const { search } = useContext(AppContext);

  useEffect(async () => {
    async function fetchData() {
      const response = await axios(API_URL);
      setMovieData(response.data);
    }
    // if (!movieData)
    fetchData();
  }, []);

  function lookUpTagsById(id) {
    return "";
  }

  function MovieListGenerator({ MoviesData }) {
    return MoviesData?.map((movie) => {
      if (!search) {
        return (
          <MovieItem
            key={movie.id}
            lookUpTagsById={lookUpTagsById}
            setTagData={setTagData}
            tagData={tagData}
            movie={movie}
          />
        );
      } else if (
        search &&
        tagState.tags[movie.id] &&
        tagState.tags[movie.id].includes(search)
      ) {
        return (
          <MovieItem
            lookUpTagsById={lookUpTagsById}
            setTagData={setTagData}
            tagData={tagData}
            movie={movie}
          />
        );
      } else {
        return <></>;
      }
    });
  }

  return movieData ? (
    <>
      <ul>
        <MovieListGenerator MoviesData={movieData} />
      </ul>
    </>
  ) : (
    <></>
  );
}
