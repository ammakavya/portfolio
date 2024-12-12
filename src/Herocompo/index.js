import React from 'react';
import Myimage from '../assets/Myimage.JPG';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Herocompo = () => {
  return (
    <>
    <Box
      sx={{
        width: 1700,
        height: 600,
        backgroundImage: `url(${Myimage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      
        overflow: 'hidden',
         '@media (max-width: 1200px)': {
          width: 1200,
          height: 400,
        },
        '@media(max-width:600px)':{
          width:'100%',
          height:300
        }
      }}>
        <Box
  sx={{
    marginLeft: { xs: '0', sm: '25%', md: '60%' }, 
    textAlign: { xs: 'left', sm: 'left' }, 
    padding: { xs: 2, sm: 4 }, 
  }}
>
  <Typography
    variant="h1"
    sx={{
      color: 'white',
      fontFamily: 'bold',
      fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, 
    }}
  >
    Kavya Amma
  </Typography>
  <Typography
    variant="h4"
    sx={{
      color: 'white',
      fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, // Adjust font size
    }}
  >
    Frontend React Developer
  </Typography>
  <Link to="/contact">
    <Button
      variant="outlined"
      sx={{
        color: 'white',
        borderColor: 'white',
        marginTop: '30px',
        borderRadius: '5px',
        fontSize: { xs: '0.8rem', sm: '1rem' }, // Adjust button text size
        padding: { xs: '5px 10px', sm: '10px 20px' }, // Adjust padding
      }}
    >
      Contact Me
    </Button>
  </Link>
</Box>

      </Box>

      
   </>
   
  );
};

export default Herocompo;
