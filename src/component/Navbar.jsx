import React, { useState } from 'react';

import { AppBar, Box, Drawer, Toolbar, Typography, Link } from '@mui/material';
import { CssBaseline, styled, Divider } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

import { navItems } from '../projectsData';

// custom css
const StyledImg = styled('img')`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin: 7px 5px 7px 9px;
`; // css for logo

const StyledImage = styled('img')`
  height: 75px;
  width: 75px;
  border-radius: 100%;
`; // css for logo in mobile view

const StyledAppBar = styled(AppBar)`
  background: rgb(147,179,176);
  background: linear-gradient(324deg, rgba(147,179,176,1) 20%, rgba(0,35,63,1) 100%);
  width: 100%;
`; // custom appbar css

const linkStyles = {
  color: '#F9DED7',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer',
  mr: '18px',
  position: 'relative',
  '@keyframes moveBorder': {
    '0%': {
      transform: 'scaleX(0)',
      transformOrigin: 'left',
    },
    '50%': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  },
}; // navitems style

const activeLinkStyles = {
  ...linkStyles,
  color: '#fff',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-23px',
    width: '100%',
    height: '3px',
    borderRadius: '2px',
    background: '#fff',
    animation: 'moveBorder 1.2s ease forwards',
  },
}; // navitems css after click

const textStyle = {
  color: '#830621'
};

const headerStyle = {
  color: '#F9DED7'
};

const Navbar = ({ scrollToHome, scrollToAbout, scrollToSkills, scrollToContact, activeNavItem }) => {

  // handle state of mobile view
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle drawer when item clicked & show the content
  };

  return (
    <>
      <Box>
        <CssBaseline />

        {/* Desktop & Tab view */}
        <StyledAppBar component="nav">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledImg src='logo.png' alt='logo-img' />
                
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 'bold' }}
                >
                  <span style={textStyle}>React</span><span style={headerStyle}>Portfolio</span>
                </Typography>
              </Box>
            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
              {navItems.map((item, index) => (
                <Link key={item.text} sx={activeNavItem === index ? activeLinkStyles : linkStyles} onClick={() => {
                  if (index === 0) {
                    scrollToHome();
                  } else if (index === 1) {
                    scrollToAbout();
                  } else if (index === 2) {
                    scrollToSkills();
                  } else if (index === 3) {
                    scrollToContact();
                  }
                }}>{item.text}</Link>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MoreVert />
            </IconButton>
          </Toolbar>
        </StyledAppBar>

        {/* Mobile view */}
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <StyledImage src='Me.jpg' alt='profile-img' sx={{ mt: '13px' }} />
              <Typography variant='h5' sx={{ mb: '7px', color: '#830621' }}><span>React Portfolio</span></Typography>
              <Divider />
              <List>
                {navItems.map((item, index) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton sx={{ alignItems: 'center', color: '#496B77' }} onClick={() => {
                      if (index === 0) {
                        scrollToHome();
                        handleDrawerToggle();
                      } else if (index === 1) {
                        scrollToAbout();
                        handleDrawerToggle();
                      } else if (index === 2) {
                        scrollToSkills();
                        handleDrawerToggle();
                      } else if (index === 3) {
                        scrollToContact();
                        handleDrawerToggle();
                      }
                    }}>
                      <span>{item.icon}</span>
                      <ListItemText primary={item.text} sx={{ ml: '5px' }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </nav>

      </Box>
    </>
  );
}

export default Navbar;