import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
      <Link to='/exchanges'>Exchanges</Link>
      <Link to='/news'>News</Link>
    </nav>
  );
};

export default Navbar;
