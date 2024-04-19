import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, styled } from '@mui/material';

import Projects from './Projects';

import { frontendSkills, backendSkills } from '../projectsData';

// Styled components
const StyledGrid = styled(Grid)`
  padding: 43px 30px;
`;
const StyledImg = styled('img')`
  width: 34px;
  height: 34px;
`;
const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const SkillCard = ({ title, skills, image }) => (
  <Grid item xs={12} sm={6} md={6} lg={5}>
    <StyledCard sx={{ p: '10px 15px 10px 9px', display: 'flex', alignItems: 'center' }}>
      <CardContent sx={{ flex: '0.9 0 auto' }}>
        <Typography variant="h6" component="h2" gutterBottom>
          <span style={{ color: '#C85B01' }}>{title} ~</span>
        </Typography>
        {skills.map((skill, index) => (
          <Typography key={index} variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledImg src={skill.image} alt='logo' sx={{ marginRight: '7px' }} />{skill.name}
          </Typography>
        ))}
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: '180px',
          height: '180px',
          '@media (max-width: 400px)': {
            width: '125px',
            height: '125px',
          },
          animation: 'pulse 2s infinite alternate', /* Added animation using keyframes */
  
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
            },
            '100%': {
              transform: 'scale(1.1)',
            }
          },
        }}
        image={image}
        alt={`${title.toLowerCase()}-img`}
      />
    </StyledCard>
  </Grid>
);

const Skills = () => {

  return (
    <>
      <StyledGrid container spacing={4} alignItems="center" justifyContent='center' sx={{ minHeight: '100vh' }}>
        {/* First row for skills */}
        <Grid item xs={12} md={10}>
          <Typography variant="h4" gutterBottom sx={{ mb: '18px', color: '#305264' }} textAlign='center'>
            <span>Skills</span>
            <Typography variant="body2" gutterBottom sx={{ color: '#7a8b8a' }}>
              <span>(My coding knowledge)</span>
            </Typography>
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {/* Frontend Card */}
            <SkillCard title="Frontend" skills={frontendSkills} image="frontend.jpg" />

            {/* Backend Card */}
            <SkillCard title="Backend" skills={backendSkills} image="backend.jpg" />
          </Grid>
        </Grid>

        {/* Second row for projects */}
        <Projects />
      </StyledGrid>
    </>
  );
};

export default Skills;