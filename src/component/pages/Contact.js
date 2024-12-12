import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const YOUR_SERVICE_ID = 'service_vwczuwd';
    const YOUR_TEMPLATE_ID = 'template_fh2dvaa';
    const YOUR_PUBLIC_KEY = 'QDHwhU4Yns9-QhA4u';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'kavya',
      message: message,
      subject: subject,
      mobile_number: mobilenumber,
    };

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
      .then(() => {
        setStatusMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMobilenumber('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try again.');
        console.error('Email send error: ', error);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 4,
        padding: 4,
        width:'100%',
        height:'auto',
        backgroundColor:'#1ABC9C',
        opacity:'90%'
      }}
    >
      {/* Contact Info Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          backgroundColor: '#ff9194',
          padding: 3,
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" sx={{ paddingBottom: 2 }}>Contact Info</Typography>
        <Typography sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ marginRight: 1 }} /> Haffezpet, Hyderabad, 500049
        </Typography>
        <Typography sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ marginRight: 1 }} /> ammakavya1999@gmail.com
        </Typography>
        <Typography sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ marginRight: 1 }} /> 9063315872
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 2 }}>
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          backgroundColor: '#2F2F4F',
          color: 'white',
          padding: 3,
          mr:50,
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <FormControl fullWidth>
            <Typography variant="h3" sx={{ marginBottom: 3 }}>Contact Me</Typography>
            <TextField
              fullWidth
              sx={{ bgcolor: 'whitesmoke', marginBottom: 2, borderRadius: 1 }}
              size="small"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ bgcolor: 'whitesmoke', marginBottom: 2, borderRadius: 1 }}
              size="small"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ bgcolor: 'whitesmoke', marginBottom: 2, borderRadius: 1 }}
              size="small"
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ bgcolor: 'whitesmoke', marginBottom: 2, borderRadius: 1 }}
              size="small"
              label="Mobile Number"
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ bgcolor: 'whitesmoke', marginBottom: 2, borderRadius: 1 }}
              size="small"
              multiline
              rows={2}
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white', padding: 1 }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
        {statusMessage && (
          <Typography sx={{ color: 'yellow', marginTop: 2 }}>{statusMessage}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Contact;
