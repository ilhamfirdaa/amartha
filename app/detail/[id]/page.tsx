import React from "react";
import { AnimeDetail } from "@/app/types";
import styles from "./detail.module.scss";
import { formatNumberWithCommas } from "@/app/utils/helper";

const AnimeDetailPage = async ({ params }: { params: { id: number } }) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}`);
  const anime: AnimeDetail = await res.json();

  return (
    <section id="anime-detail" className={styles.container}>
      <div id="title" className="px-5 mt-">
        <h2 className="text-3xl">{anime.data.title}</h2>
        <div className="flex gap-x-5 text-sm mt-auto">
          <span>{anime.data.year || "-"}</span>
          <span>{anime.data.rating}</span>
          <span>{anime.data.episodes} eps</span>
        </div>
      </div>

      {anime.data.trailer.youtube_id && (
        <div id="trailer" className="mt-2">
          <figure>
            <iframe
              src={anime.data.trailer.embed_url}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.trailer}
            ></iframe>
          </figure>
        </div>
      )}

      <div id="content" className="flex px-5 gap-3 mt-5 mb-10">
        <div className="w-3/12 flex flex-col">
          <figure className="self-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={anime.data.images.webp.image_url}
              alt={anime.data.title}
              className={styles.image}
            />
          </figure>

          <span className="font-bold mt-2">Producers</span>
          <hr />
          <ul className="text-sm">
            {anime.data.producers.length > 0 ? (
              anime.data.producers.map((producer) => (
                <li key={producer.mal_id}>{producer.name}</li>
              ))
            ) : (
              <li>-</li>
            )}
          </ul>

          <span className="font-bold mt-2">Studios</span>
          <hr />
          <ul className="text-sm">
            {anime.data.studios.length > 0 ? (
              anime.data.studios.map((studio) => (
                <li key={studio.mal_id}>{studio.name}</li>
              ))
            ) : (
              <li>-</li>
            )}
          </ul>

          <span className="font-bold mt-2">Licensors</span>
          <hr />
          <ul className="text-sm">
            {anime.data.licensors.length > 0 ? (
              anime.data.licensors.map((licensor) => (
                <li key={licensor.mal_id}>{licensor.name}</li>
              ))
            ) : (
              <li>-</li>
            )}
          </ul>
        </div>

        <div className="w-9/12 flex flex-col">
          <ul className="inline-flex gap-2">
            {anime.data.genres.map((genre) => (
              <li key={genre.mal_id}>{genre.name}</li>
            ))}
          </ul>

          <div className="flex gap-x-5 mt-2">
            <div className="flex">
              <h6 className="text-4xl">⭐</h6>
              <div className="flex flex-col">
                <span className="text-2xl">{anime.data.score}</span>
                <span className="text-xs">Score</span>
                <span className="text-xs">
                  {formatNumberWithCommas(anime.data.scored_by)} Users
                </span>
              </div>
            </div>

            <div className="flex">
              <h6 className="text-4xl">❤️</h6>
              <div className="flex flex-col">
                <span className="text-2xl">{anime.data.popularity}</span>
                <span className="text-xs">Popularity</span>
                <span className="text-xs">
                  {formatNumberWithCommas(anime.data.members)} Members
                </span>
              </div>
            </div>
          </div>

          <span className="font-bold mt-3">Synopsis</span>
          <hr />
          <p className="whitespace-pre-line">{anime.data.synopsis}</p>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetailPage;
