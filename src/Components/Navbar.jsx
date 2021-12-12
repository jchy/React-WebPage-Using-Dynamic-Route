import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/products" className={styles.link}>
        Products
      </Link>
      <Link to="/about" className={styles.link}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
