import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
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
      <button onClick={handleSearch} className={styles.btn__search}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
