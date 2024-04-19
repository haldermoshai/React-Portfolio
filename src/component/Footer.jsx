import React from "react";
import { Link, Typography, styled } from "@mui/material";

const BottomFooter = styled("footer")({
  backgroundColor: '#e29e91',
  width: '100%',
  height: '7vh',
  color: '#52747F',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" align="center" {...props}>
      <span>{' © '}
      {new Date().getFullYear()} {' '}
      <Link href="/" sx={{ textDecoration: 'none', color: '#830621' }}>
        Sourav Halder
      </Link>.{' '}
      All rights reserved.</span>
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <BottomFooter>
        <Copyright />
      </BottomFooter>
    </>
  );
};

export default Footer;