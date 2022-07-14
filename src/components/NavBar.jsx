import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Menu from './Menu';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


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
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

      {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
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
            vertical: 'top',
            horizontal: 'left',
          }}
          isOpen={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          // sx={{
          //   display: { xs: 'block', md: 'none' }
          // }}
          items={pages}
        />

      </div>

      {/* Viewable on desktop and larger (around 540px -- decide later) */}
      {/* Title */}
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        Schlagzeug
      </Typography>

      {/* Button Nav Links */}

      {/* <div className="box">
        {pages.map((page) => (
          <Link to={page.link} key={page.name} style={{ textDecoration: 'none' }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#FDCB0B', display: 'block' }}
            >
              <Typography textAlign="center">{page.name}</Typography>
            </Button>
          </Link>
        ))}
      </div> */}

      {pages.map((page) => (
        <div
          id="navbar-link"
          key={page.name}
          onClick={handleCloseNavMenu}
          onBlur={handleCloseNavMenu}
          style={{ backgroundColor: '#9AB3BA' }}
        >
          <Link to={page.link} style={{ textDecoration: 'none', color: '#FDCB0B' }}>
            {page.name}
          </Link>
        </div>
      ))}

      {/* Viewable on all media sizes */}
      {/* User Settings menu */}
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        {/* <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu> */}
      </Box>
    </div>
  );
};
