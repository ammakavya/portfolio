import React, { Component } from 'react';

class StudentsData extends Component {
  render() {
    const { students, onDeleteStudent } = this.props;

    if (!students || students.length === 0) {
      return <p>No students found.</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => onDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default StudentsData;
