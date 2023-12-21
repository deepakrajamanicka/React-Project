
import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="body1">
          Welcome to our book review website! We are passionate about books and love sharing our thoughts with fellow
          readers. Our goal is to provide insightful and honest book reviews to help you discover your next favorite read.
        </Typography>
      </Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Our Reviewers</Typography>
              <Typography variant="body1">
                Meet our team of dedicated reviewers who share their unique perspectives on a wide range of genres.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Our Favorites</Typography>
              <Typography variant="body1">
                Discover the books that have left a lasting impact on us. Explore our favorites and see if they resonate
                with you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body1">
                Have questions or suggestions? Reach out to us. We'd love to hear from fellow book enthusiasts!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
