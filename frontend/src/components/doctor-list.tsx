import React from 'react';
import axios from 'axios';

interface Doctor {
  id: number;
  fullName: string;
  specialist: string;
}

const DoctorList = () => {
  const [doctors, setDoctors] = React.useState<Doctor[]>([]);

  React.useEffect(() => {
    const fetchDoctorList = async () => {
      try {
        const response = await axios.get('/doctors');
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctorList();
  }, []);

  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.fullName} ({doctor.specialist})</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;