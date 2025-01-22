// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Zwiggato</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <i className="fas fa-search search-icon"></i>
      </div>
    </nav>
  );
};

export default Navbar;
