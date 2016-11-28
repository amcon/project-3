import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className={styles['header-container']}>

      <div className={styles['logo']}>
        <img src="/chairShare.png" alt="Logo"/>
        <h1>chairShare</h1>
      </div>
      <nav className={styles['links']}>
        <Link className={styles['create-post']} to="/create">Create Post</Link>
        <Link className={styles['profile']} to="/profile">Profile</Link>
        <Link to="/product">APP3</Link>
      </nav>

      </div>
      )
  }
}

export default Header;
