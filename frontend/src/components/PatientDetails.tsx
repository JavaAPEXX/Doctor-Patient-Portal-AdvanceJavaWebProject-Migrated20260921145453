import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientDetails = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/patients')
      .then(response => {
        setPatientData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Patient Details</h2>
      <table className="table table-success table-striped">
        <thead>
          <tr className="table">
            <th scope="col" style="padding-right:70px">Full Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Appointment</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col" style="padding-right:50px">Diseases</th>
            <th scope="col" style="padding-right:70px">Doctor Name</th>
            <th scope="col">Address</th>
            <th scope="col" style="padding-right:100px">Status</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient) => (
            <tr key={patient.id}>
              <th>{patient.fullName}</th>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.appointmentDate}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.diseases}</td>
              <td>{patient.doctorName}</td>
              <td>{patient.address}</td>
              <td>{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDetails;