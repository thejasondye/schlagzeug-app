import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Menu from './Menu';


export default function NavBar () {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navMenuOffset, setNavMenuOffset] = useState(null);
  const [userMenuOffset, setUserMenuOffset] = useState(null);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );

  const navMenu = useRef(null);
  const userMenu = useRef(null);
  const getRekt = el => el.getBoundingClientRect();

  // make navbar classnames fluid to allow for varied styling based on viewport size


  useEffect(() => {
    window.matchMedia("(min-width: 600px)")
      .addEventListener('change', e => setIsDesktop(e.matches));
    const userRect = getRekt(userMenu.current);
    setUserMenuOffset({
      top: userRect.bottom + window.scrollX,
      left: userRect.left + window.scrollY
    });
    if (!isDesktop) {
      const navRect = getRekt(navMenu.current);
      setNavMenuOffset({
        top: navRect.bottom + window.scrollX,
        left: navRect.right + window.scrollY
      });
    }
  }, []);


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
  const icons = ['fa-solid fa-bars fa-lg', 'fa-solid fa-xmark fa-lg'];

  return (

    <div id="navbar" className="card2">
      <div id="navbar-title">
        Schlagzeug
      </div>

      {!isDesktop &&
        <div id="nav-menu-cntnr">
          <div ref={navMenu}>
            <MenuButton
              icons={['fa-solid fa-bars fa-lg', 'fa-solid fa-xmark fa-lg']}
              handleOpenMenu={handleOpenNavMenu}
              handleCloseMenu={handleCloseNavMenu}
              id={"nav-menu-btn"}
              className={null}
              isOpen={Boolean(anchorElNav)}
            />
          </div>

          {/*
            Popup Menu container
            -- move this to reusable component --
          */}
          <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            anchorOrigin={navMenuOffset}
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
      }
      {/* Button Nav Links */}
      <div id="navbar-links">
      {isDesktop &&
        pages.map((page) => (
          <div
            className="navbar-link"
            key={page.name}
          >
            <Link to={page.link} style={{ textDecoration: 'none', color: '#FDCB0B' }}>
              {page.name}
            </Link>
          </div>
        ))
      }
      </div>


      {/* Viewable on all media sizes */}
      {/* User Settings menu */}
      <div
        className="user-menu-icon"
        ref={userMenu}
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
        id="user-menu"
        className="card1"
        anchorEl={anchorElUser}
        anchorOrigin={userMenuOffset}
        onClick={handleCloseUserMenu}
        keepMounted
        transformOrigin={null}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        items={settings}
      />
    </div>
  );
};
