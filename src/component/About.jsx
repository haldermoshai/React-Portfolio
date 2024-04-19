import React from 'react';
import { Grid, Typography, styled, Button } from '@mui/material';

const StyledImg = styled('img')`
  border-radius: 5%;
  max-width: 100%;
  height: auto;
  paddingTop: 30px;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;

const StyledGrid = styled(Grid)`
  padding: 43px 30px;
`;

const textColor = {
  color: '#C85B01'
};

const About = () => {

	const handleDownloadCV = () => {
    window.open('/Sourav Halder Resume.pdf', '_blank');
  };

  return (
    <StyledGrid container spacing={4} alignItems="center" justifyContent="space-between" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#305264' }}>
          <span>About Me</span>
        </Typography>
        <Typography>
          Hello there! My name is <span style={textColor}>Sourav</span>, and I'm passionate about crafting seamless user experiences as a full-stack developer. Currently, my focus lies in the captivating world of UI/UX frontend development, where I leverage the power of React to bring designs to life.
        </Typography><br />
        <Typography>
					Outside of coding, you can find me capturing moments through my lens, exploring the world of photography with an eye for unique perspectives and striking compositions. When I'm not behind the camera, you can find me exploring new technologies, diving into design trends, or simply enjoying a good cup of coffee while brainstorming my next project. Additionally, I have a deep passion for sports, whether it's Football or Cricket. I believe that just as in coding, continuous learning is essential in photography, art, and sports, and I'm always eager to expand my skills and explore new techniques.
        </Typography><br />
				<Typography>
					<span style={textColor}>Go through my resume here!</span><br />
					<Button variant="contained" onClick={handleDownloadCV} 
            sx={{ mt: '7px', fontWeight: 'bold', bgcolor: '#aa5007', '&: hover': { bgcolor: '#b06759' } }}
          >
						Download
					</Button>
				</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <StyledImg src="coder.jpeg" alt="coder-img" />
      </Grid>
    </StyledGrid>
  );
};

export default About;