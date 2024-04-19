import React from 'react';
import { Grid, Typography, styled } from '@mui/material';

const StyledGrid = styled(Grid)`
  padding: 43px 20px 20px 20px; /* Added padding to make content readable on smaller screens */
`;

const StyledImg = styled('img')`
  border-radius: 100%;
  max-width: 100%;
  height: auto;
  animation: pulse 2s infinite alternate; /* Added animation using keyframes */
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const StyledEmoji = styled('span')`
  display: inline-block;
  animation: wave 1s infinite;

  @keyframes wave {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
  }
`;

const textStyle = {
  color: '#830621'
};
const textColor = {
  color: '#C85B01'
};

const Home = () => {

  return (
    <>
      <StyledGrid container justifyContent='center' alignItems='center' sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} sx={{ p: '20px 20px 20px 0px', justifyContent: 'center' }}>
          <Typography variant="h2" sx={{ color: '#305264', mb: 2 }}>
            <span>Hi there!<StyledEmoji role="img" aria-label="wave">👋</StyledEmoji><br />
               I am <span style={textStyle}>Sourav Halder.</span>
            </span>
          </Typography>
          <Typography variant="h5" sx={{ color: '#406270', fontWeight: 'bold' }}>
            I'm a novice Full-Stack <span style={textColor}>Web-Developer</span>.
          </Typography>
					<Typography variant="h6" sx={{ color: '#406270' }}>Welcome to my Portfolio Website!</Typography>
        </Grid>

        <Grid item xs={12} sm={5} md={4} sx={{ justifyContent: 'center' }}>
          <StyledImg src='Me.jpg' alt='profile-img' />
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Home;