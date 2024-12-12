import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Skills = () => {
  const skills = [
    { name: "HTML", level: 70, color: "#17B169" },
    { name: "CSS", level: 80, color: "#17B169" },
    { name: "JavaScript", level: 75, color: "#17B169",  },
    { name: "React", level: 85, color: "#17B169" },
    { name: "Nodejs", level: 55, color: "#17B169" },
    { name: "Expressjs", level: 55, color: "#17B169" },
    { name: "mongodb", level: 50, color: "#17B169" },
    { name: "RestApi", level: 60, color: "#17B169" },
  ];

  const containerStyle = {
    display:"grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "20px",
    width: "80%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    
  };

  const skillStyle = {
    marginBottom: "20px",
    display:'grid'
    
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    color:'white'
  };

  const progressBarStyle = {
    backgroundColor: "#f3f3f3",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
    height: "20px",
    
  };

  const progressStyle = (level, color, textColor) => ({
    width: `${level}%`,
    height: "100%",
    backgroundColor: color,
    color: textColor || "#fff",
    textAlign: "center",
    lineHeight: "20px",
    borderRadius: "5px",
    transition: "width 0.5s ease-in-out",
  });
  return (
    <Box sx={{backgroundColor:'#333'}}>
 <Typography variant='h2' sx={{padding:'2%',color:'white'}}>skills</Typography>
 <Typography variant='subtitle1' sx={{color:'white',marginLeft:"10%",marginRight:"7%"}}>Proficient in React.js for building reusable components, with strong knowledge of JavaScript (ES6+). Skilled in HTML and CSS for creating responsive layouts, and experienced with Node.js and Express.js for backend development and API integration.
</Typography>
<div style={containerStyle}>
      {skills.map((skill) => (
        <div key={skill.name} style={skillStyle}>
          <div style={labelStyle}>{skill.name}</div>
          <div style={progressBarStyle}>
            <div
              style={progressStyle(skill.level, skill.color, skill.textColor)}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>

    </Box>
  )
}

export default Skills;