"use client";

import React, { useEffect, useState } from "react";
import { AnimeData } from "../types";
import { formatNumber } from "../utils/helper";
import styles from "./AnimeList.module.scss";
import Pagination from "./Pagination";
import { useRouter } from "next/navigation";
import Skeleton from "./skeleton/Skeleton";

interface AnimeListProps {
  searchQuery: string;
}

const ITEMS_PER_PAGE = 10;

const AnimeList: React.FC<AnimeListProps> = ({ searchQuery }) => {
  const [animes, setAnime] = useState<AnimeData>();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.jikan.moe/v4/anime?limit=${ITEMS_PER_PAGE}&page=${currentPage}&q=${searchQuery}`;
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setAnime(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, searchQuery]);

  const ListSkeleton = () => {
    const items: JSX.Element[] = [];

    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      items.push(<Skeleton key={i} />);
    }

    return items;
  };

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <ListSkeleton />
        </div>
      ) : (
        <div className={styles.container}>
          {animes?.data.map((anime) => (
            <div
              key={anime.mal_id}
              className={styles.card}
              onClick={() => router.push(`/detail/${anime.mal_id}`)}
            >
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={anime.images.webp.image_url}
                  alt={anime.title}
                  className={styles.card__image}
                />
              </figure>
              <div className={styles.card__body}>
                <div className="flex gap-x-5">
                  <span className="text-sm">
                    ⭐{" "}
                    {anime.score
                      ? `${anime.score} (${formatNumber(anime.scored_by)})`
                      : "-"}
                  </span>
                </div>
                <h2 className={styles.card__title}>{anime.title}</h2>
                <div className="flex gap-x-5 text-xs mt-auto">
                  <span>{anime.year || "-"}</span>
                  <span>{anime.episodes} eps</span>
                </div>
              </div>
            </div>
          ))}

          {animes && (
            <Pagination
              currentPage={currentPage}
              totalPages={animes?.pagination.last_visible_page}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AnimeList;
