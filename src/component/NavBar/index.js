import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">KA</div>

      {/* Desktop Navigation Links */}
      <Box
        className="nav-links"
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Link to="/">
          <Button className="button">HOME</Button>
        </Link>
        <Link to="/contact">
          <Button className="button">Contact</Button>
        </Link>
        <Link to="/about">
          <Button className="button">About</Button>
        </Link>
        <Link to="/skills">
          <Button className="button">Skills</Button>
        </Link>
        <Link to="/experience">
          <Button className="button">Experience</Button>
        </Link>
        <Link to="/projects">
          <Button className="button">Projects</Button>
        </Link>
      </Box>

      {/* Hamburger Menu for Mobile */}
      <IconButton
        className="menu-button"
        sx={{ display: { xs: 'flex', sm: 'none' }, marginLeft: 'auto' }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      {/* Social Media Links */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          gap: 2,
          marginLeft: 'auto',
        }}
      >
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" width={25} src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-jz44rpiz.png" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" width={25} src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" width={30} src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" width={30} src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.jpg" alt="Twitter" />
        </a>
      </Box>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/skills">
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button component={Link} to="/experience">
              <ListItemText primary="Experience" />
            </ListItem>
            <ListItem button component={Link} to="/projects">
              <ListItemText primary="Projects" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
