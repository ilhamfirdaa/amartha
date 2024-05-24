import React from "react";
import styles from "./Navbar.module.scss";
import SearchBar from "./SearchBar";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Navbar;
