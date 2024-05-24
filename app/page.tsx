import React, { Suspense } from "react";
import AnimeList from "@/app/components/animeList/AnimeList";
import Skeleton from "@/app/components/skeleton/Skeleton";

const Home = () => {
  const SuspenseFallback = () => {
    return <></>;
  };

  return (
    <>
      <Suspense fallback={<SuspenseFallback />}>
        <AnimeList />
      </Suspense>
    </>
  );
};

export default Home;
