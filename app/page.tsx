import React from "react";
import { AnimeData } from "./types";

const Home = async () => {
  const res = await fetch("https://api.jikan.moe/v4/anime");
  const animes: AnimeData = await res.json();

  return (
    <>
      <h1>Anime List</h1>
      <ul>
        {animes.data.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
