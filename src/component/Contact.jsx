import React, { useRef, useState } from 'react';
import { PhoneOutlined, HomeOutlined, MailOutline } from '@mui/icons-material';
import { Container, Grid, Typography, Button, TextField } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false); // State to track email sending status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v1a3wqm', 'template_aq9ybeh', form.current, {
        publicKey: 'hN2y5DmpmbjdiVbX3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true); // Set state to true when email is successfully sent
          setTimeout(() => {
            setEmailSent(false); // After 3 seconds, hide the alert
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Grid container justifyContent='center' sx={{ minHeight: '100vh', flexDirection: 'column', p: '70px 10px 20px 10px' }}>

        <Typography variant="h4" textAlign='center' sx={{ mb: '15px', color: '#305264' }}>
          <span>Contact Me</span>
        </Typography>

        <Container maxWidth="md">

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <form ref={form} onSubmit={sendEmail} >
                <TextField
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  type='text'
                  name='user_name'
                  required
                  inputProps={{ style: { fontSize: '16px', width: '100%' } }} // Adjust font size and width
                  InputLabelProps={{ style: { fontSize: '16px' } }} // Adjust label font size
                  color="warning"
                />
                <TextField
                  label="E-mail"
                  fullWidth
                  margin="normal"
                  type="email"
                  name='user_email'
                  required
                  inputProps={{ style: { fontSize: '16px', width: '100%' } }} // Adjust font size and width
                  InputLabelProps={{ style: { fontSize: '16px' } }} // Adjust label font size
                  color="warning"
                />
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  rows={3}
                  margin="normal"
                  name='message'
                  required
                  inputProps={{ style: { fontSize: '16px', width: '100%' } }} // Adjust font size and width
                  InputLabelProps={{ style: { fontSize: '16px' } }} // Adjust label font size
                  color="warning"
                />
                <Button
                  variant="contained"
                  type="submit"
									fullWidth
                  sx={{ fontWeight: 'bold', mt: '5px', bgcolor: '#aa5007', '&: hover': { bgcolor: '#b06759' } }}
                >
                  Send E-mail
                </Button>
              </form>
              {emailSent && ( // Conditionally render the alert if emailSent state is true
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="warning">
                  Your email is successfully sent.
                </Alert>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid sx={{ mt: '13px' }}>
                <Typography variant="h6" component="h4" gutterBottom sx={{ fontSize: "20px", display: 'flex', alignItems: 'center', color: '#C85B01' }}>
                  <HomeOutlined sx={{ fontSize: "30px", mr: '3px' }} /><p>Address</p>
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  Amtala Housing Complex, N. D. Road,<br /> West Bengal - 743503, India
                </Typography><br />

                <Typography variant="h6" component="h4" gutterBottom sx={{ fontSize: "20px", display: 'flex', alignItems: 'center', color: '#C85B01' }}>
                  <PhoneOutlined sx={{ fontSize: "25px", mr: '6px' }} /><p>Phone</p>
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  +919804334350 / +919804830939
                </Typography><br />

                <Typography variant="h6" component="h4" gutterBottom sx={{ fontSize: "20px", display: 'flex', alignItems: 'center', color: '#C85B01' }}>
                  <MailOutline sx={{ fontSize: "25px", mr: '6px' }} /><p>Email</p>
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                  souravhalder5197@gmail.com
                </Typography>

                <Typography sx={{ mt: '20px' }}>
                  <SocialIcon url="https://www.facebook.com/sourav.halder.777158" target="_blank" style={{ width: '30px', height: '30px', marginRight: '7px' }} />
                  <SocialIcon url="https://instagram.com/madly_ordinary" target="_blank" style={{ width: '30px', height: '30px', marginRight: '7px' }} />
                  <SocialIcon url="https://github.com/haldermoshai" target="_blank" style={{ width: '30px', height: '30px', marginRight: '7px' }} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Contact;