import { Card, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import DashBoard from '../../assets/Dashboard.png';
import Invoice from '../../assets/Invoice.png';

export const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger
        flexWrap: 'wrap',
        justifyContent: 'center', // Center-align cards
        alignItems: 'center',
        gap: 3, // Spacing between cards
        padding: 2, // Add padding to the container
      }}
    >
      {/* Dashboard Card */}
      <Card
        sx={{
          width: { xs: '90%', sm: '45%', md: '30%' }, // Adjust width for different screen sizes
          margin: '10px',
          padding: '10px',
          border: '2px solid orange',
          transition: '0.5s',
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 1 }}>
          Dashboard
        </Typography>
        <CardMedia
          component="img"
          image={DashBoard}
          alt="Dashboard"
          sx={{
            width: '100%',
            height: 'auto', // Maintain aspect ratio
            borderRadius: 2,
          }}
        />
      </Card>

      {/* Invoice Card */}
      <Card
        sx={{
          width: { xs: '90%', sm: '45%', md: '30%' }, // Adjust width for different screen sizes
          margin: '10px',
          padding: '10px',
          border: '2px solid orange',
          transition: '0.5s',
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 1 }}>
          Invoice
        </Typography>
        <CardMedia
          component="img"
          image={Invoice}
          alt="Invoice"
          sx={{
            width: '100%',
            height: 'auto', // Maintain aspect ratio
            borderRadius: 2,
          }}
        />
      </Card>
    </Box>
  );
};
