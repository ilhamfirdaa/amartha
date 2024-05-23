"use client";

import React, { useEffect, useState } from "react";
import { AnimeData } from "../types";
import { formatNumber } from "../utils/helper";
import styles from "./AnimeList.module.scss";

const AnimeList = () => {
  const [animes, setAnime] = useState<AnimeData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?limit=${10}`);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setAnime(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {animes?.data.map((anime) => (
          <div key={anime.mal_id} className={styles.card}>
            <figure>
              <img
                src={anime.images.webp.image_url}
                alt={anime.title}
                className={styles.card__image}
              />
            </figure>
            <div className={styles.card__body}>
              <div className="flex gap-x-5">
                <span className="text-sm">
                  ⭐ {anime.score} ({formatNumber(anime.scored_by)})
                </span>
              </div>
              <h2>{anime.title}</h2>
              <div className="flex gap-x-5 text-xs">
                <span>{anime.year || "-"}</span>
                <span>{anime.episodes} eps</span>
              </div>
              <div className={styles.card__actions}>
                <button className="text-sky-800 bg-gray-300 hover:bg-gray-400 py-1 px-5 rounded-sm">
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimeList;
