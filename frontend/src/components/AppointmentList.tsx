import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Appointment {
  id: number;
  fullName: string;
  gender: string;
  age: number;
  appointmentDate: string;
  phone: string;
  diseases: string;
  doctorName: string;
  status: string;
}

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('/api/appointments')
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSuccess = (message: string) => {
    setSuccessMsg(message);
  };

  const handleError = (message: string) => {
    setErrorMsg(message);
  };

  return (
    <div>
      <h2>Appointment List</h2>
      <p className="text-center text-success fs-5" style={{ display: successMsg ? 'block' : 'none' }}>
        {successMsg}
      </p>
      <p className="text-center text-danger fs-5" style={{ display: errorMsg ? 'block' : 'none' }}>
        {errorMsg}
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Phone</th>
            <th scope="col">Diseases</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.fullName}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.age}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.diseases}</td>
              <td>{appointment.doctorName}</td>
              <td>
                {appointment.status === 'Pending' ? (
                  <a href="" className="btn btn-sm btn-warning">Pending</a>
                ) : (
                  appointment.status
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;