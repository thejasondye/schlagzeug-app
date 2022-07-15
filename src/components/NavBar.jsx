import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Menu from './Menu';


export default function NavBar () {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {name: 'Home', link: '/'},
    {name: 'Music', link: 'music'},
    {name: 'Blog', link: 'blog'}
  ];
  const settings = [
    {name: 'Profile', link: '/'},
    {name: 'Account', link: '/'},
    {name: 'Dashboard', link: '/'},
    {name: 'Logout', link: '/'}
  ];

  return (

    <div id="navbar" className="card2 container center">
      {/*
        TODO: Make this title shift to center and resize for mobile
          instead of rendering two titles
      */}
      <span id="navbar-title">
        Schlagzeug
      </span>

      {/* Needs to be viewable on mobile and tablet sizes only */}

      <div id="nav-menu-cntnr" className="box">
        <MenuButton
          icons={['fa-solid fa-bars fa-lg', 'fa-solid fa-xmark fa-lg']}
          handleOpenMenu={handleOpenNavMenu}
          handleCloseMenu={handleCloseNavMenu}
          id={"nav-menu-btn"}
          className={null}
          isOpen={Boolean(anchorElNav)}
        />

        {/*
          Popup Menu container
          -- move this to reusable component --
        */}
        <Menu
          id="nav-menu"
          anchorEl={anchorElNav}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          isOpen={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          // sx={{
          //   display: { xs: 'block', md: 'none' }
          // }}
          items={pages}
        />

      </div>

      {/* Button Nav Links */}

      {pages.map((page) => (
        <div
          className="navbar-link"
          key={page.name}
        >
          <Link to={page.link} style={{ textDecoration: 'none', color: '#FDCB0B' }}>
            {page.name}
          </Link>
        </div>
      ))}

      {/* Viewable on all media sizes */}
      {/* User Settings menu */}
      <div
        className="user-menu"
        onClick={anchorElUser ? handleCloseUserMenu : handleOpenUserMenu}
        style={{ padding: 0 }}
      >
        <img
          id="user-avatar"
          alt="Remy Sharp"
          src="/lib/images/favicon.ico"
        />
      </div>
      <Menu
        // sx={{ mt: '45px' }}
        id="user-menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClick={handleCloseUserMenu}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        items={settings}
      />
    </div>
  );
};
