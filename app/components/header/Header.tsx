import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import SearchBar from "@/app/components/searchBar/SearchBar";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className="text-xl">
        <Link href="/">Anime Database</Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default Header;
