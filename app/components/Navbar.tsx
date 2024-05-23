import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <input
        type="text"
        placeholder="🔍 Search Anime..."
        className={styles.input}
      />
    </nav>
  );
};

export default Navbar;
