"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimeData } from "@/app/types";
import styles from "./animeList.module.scss";
import Pagination from "@/app/components/pagination/Pagination";
import { formatNumber } from "@/app/utils/helper";
import Skeleton from "@/app/components/skeleton/Skeleton";

const ITEMS_PER_PAGE = 10;

const AnimeList = () => {
  const [animes, setAnime] = useState<AnimeData>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string | null>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.jikan.moe/v4/anime?limit=${ITEMS_PER_PAGE}&page=${currentPage}&q=${query}`;
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
  }, [currentPage, query]);

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const ListSkeleton = () => {
    const items: JSX.Element[] = [];

    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      items.push(<Skeleton key={i} />);
    }

    return items;
  };

  return (
    <section id="anime-list" className={styles.container}>
      {loading ? (
        <ListSkeleton />
      ) : (
        <>
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
        </>
      )}
    </section>
  );
};

export default AnimeList;
