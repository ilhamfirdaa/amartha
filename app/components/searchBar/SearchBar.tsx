"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search Anime..."
        onChange={handleInputChange}
        className={styles.input__search}
      />
      <button
        onClick={() => router.push(`/?q=${query}`)}
        className={styles.btn__search}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
