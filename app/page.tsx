"use client";

import React, { useState } from "react";
import AnimeList from "./components/AnimeList";
import Navbar from "./components/Navbar";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <AnimeList searchQuery={query} />
    </>
  );
};

export default Home;
