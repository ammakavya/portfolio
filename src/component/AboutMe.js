import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const AboutMe = () => {
  return (
  <Box sx={{marginTop:'10px'}}>
    <Grid container>
        <Grid md={4}>
<Typography variant='h1'>About me</Typography>
        </Grid>
        <Grid md={8}>
            <Typography variant='h6'>
            I’m a React developer with 1 year of experience building dynamic web applications using React, JavaScript (ES6+), and Material-UI (MUI). I’ve worked on projects like e-commerce platforms, admin dashboards, and edutech apps, focusing on creating responsive UIs and efficient state management. I enjoy integrating REST APIs, writing clean code, and continuously improving my skills in fast-paced, collaborative environments.
</Typography>
<Button
  variant="contained"
  color="primary"
  href="/resume/resumee.pdf"
  download="kavyaAmma_resume.pdf"
  sx={{
    backgroundColor: "black",
    color: "white",
    margin: "20px",
  }}
>
  Download Resume
</Button>
   </Grid>
    </Grid>
  </Box>
  )
}

export default AboutMe