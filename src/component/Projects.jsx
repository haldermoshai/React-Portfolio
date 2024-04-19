import React, { useState } from 'react';
import { Grid, Box, Modal, Typography, Button, styled } from '@mui/material';
import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { GitHub, Info, HighlightOffOutlined } from '@mui/icons-material';

import { projects } from '../projectsData';

// Styled components
const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative; /* Add position relative for absolute positioning */
  overflow: hidden; /* Hide overflow to prevent unwanted content */
  transition: height 0.3s; /* Add transition for smooth animation */
  .hover-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(226,158,145);
    background: linear-gradient(0deg, rgba(226,158,145,0.75) 5%, rgba(136,169,166,1) 60%, rgba(69,102,99,1) 100%);
    opacity: 0; /* Initially hidden */
    transition: opacity 0.5s, transform 0.8s; /* Add transition for smooth animation */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translateY(-100%); /* Initially translate it below */
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
  &:hover .hover-content {
    opacity: 1; /* Show on hover */
    transform: translateY(0%); /* Move it up */
    padding: 30px;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  boxShadow: 25,
  p: 4,
};

const buttonStyle = {
  marginTop: '4px',
}

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openGitHubLink = (githublink) => {
    window.open(githublink, '_blank');
  };

  return (
    <>
      <Grid sx={{ p: '40px 0px 0px 30px' }}>
        <Typography variant="h4" gutterBottom textAlign='center' sx={{ mb: '18px', color: '#305264' }}>
          <span>Projects</span>
          <Typography variant="body2" gutterBottom sx={{ color: '#7a8b8a' }}>
            <span>(Some of my simple projects)</span>
          </Typography>
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={3}>
              <StyledCard sx={{ bgcolor: '#f6f3eb' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ color: '#C85B01' }}>
                    <span>{project.serialNo}</span>
                  </Typography>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={project.img}
                    alt="cardMedia-img"
                  />
                  <div className="hover-content">
                    <Typography sx={{ color: '#830621', mb: '10px', fontSize: '25px' }}>
                      <span>{project.title}</span>
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#000000', fontSize: '16px' }}>
                      {project.description}
                    </Typography>
                    <CardActions sx={{ mt: '10px', justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant='contained'
                        onClick={() => handleOpen(project)}
                        sx={{ textTransform: 'none', bgcolor: '#aa5007', '&: hover': { bgcolor: '#b06759' }, mr: '5px' }}
                      >
                        <Info sx={{ mr: '3px' }} /> <p style={buttonStyle}>About</p>
                      </Button>
                      <Button
                        size="small"
                        variant='contained'
                        onClick={() => openGitHubLink(project.githublink)}
                        sx={{ textTransform: 'none', bgcolor: '#284a5e', '&: hover': { bgcolor: '#557680' } }}
                      >
                        <GitHub sx={{ mr: '5px' }} /> <p style={buttonStyle}>GitHub</p>
                      </Button>
                    </CardActions>
                  </div>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HighlightOffOutlined 
            color='error' 
            onClick={handleClose} 
            sx={{ position: 'absolute', right: '-12px', top: '-12px', cursor: 'pointer' }}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span>{selectedProject && selectedProject.title}</span>
          </Typography>
          <Typography id="modal-modal-description" color='textSecondary' sx={{ mt: 2 }}>
            {selectedProject && selectedProject.detailDescription}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Projects;