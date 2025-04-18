import logo from './logo.svg';
import './App.css';
import  NavBar from './component/NavBar';
import Herocompo from './Herocompo';
import AboutMe from './component/AboutMe';

import Contact from './component/pages/Contact';
import { Outlet, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './component/Home';
import { Projects } from './component/pages/Projects';
import Experience from './component/Experience';
import Skills from './component/pages/Skills';


function App() {
  return (
    <Router basename="/portfolio">
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}
 export default App;
{/* export default App;
// import React, { Component } from 'react';
// import axios from 'axios';
// import AddStudent from './component/AddStudent';
// import StudentsData from './component/StudentsData';
// import Game from './component/Game';

// const apiURL = 'http://localhost:5000';  // Replace with your actual API URL

// class App extends Component { */}
//   state = {
//     students: [] // Initialize students as an empty array
//   };

//   componentDidMount() {
//     this.fetchStudents();
//   }

//   fetchStudents = async () => {
//     try {
//       const response = await axios.get(`${apiURL}/students`);
//       console.log("Fetched students:", response.data); // Debugging line
//       this.setState({ students: response.data });
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   addStudent = async (student) => {
//     try {
//       const response = await axios.post(`${apiURL}/students`, student);
//       this.setState({ students: [...this.state.students, response.data] });
//     } catch (error) {
//       console.error("Error adding student:", error);
//     }
//   };

//   deleteStudent = async (id) => {
//     try {
//       await axios.delete(`${apiURL}/students/${id}`);
//       this.setState({
//         students: this.state.students.filter((student) => student.id !== id)
//       });
//     } catch (error) {
//       console.error("Error deleting student:", error);
//     }
//   };

//   render() {
//     // Debugging line to check if state has students data
//     console.log("Rendering App with students:", this.state.students);

//     return (
//       <div>
//         {/* <h1>School Management System</h1>
//         <AddStudent onAddStudent={this.addStudent} />
//         <StudentsData
//           students={this.state.students} // Passing students as a prop
//           onDeleteStudent={this.deleteStudent}
//         /> */}
//         {/* <Game/> */}
        
//       </div>
//     );
//   }
// }

// export default App;
