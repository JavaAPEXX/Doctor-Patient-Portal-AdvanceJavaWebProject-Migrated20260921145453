import React from 'react';
import DoctorForm from './DoctorForm';
import DoctorService from './DoctorService';

const DoctorFormContainer: React.FC = () => {
  const [doctor, setDoctor] = React.useState<Doctor | null>(null);

  const fetchDoctor = async () => {
    const response = await fetch('/api/doctors/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setDoctor(data);
  };

  const updateDoctor = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/doctors/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: event.target.elements.fullName.value,
        dateOfBirth: event.target.elements.dateOfBirth.value,
        qualification: event.target.elements.qualification.value,
        specialist: event.target.elements.specialist.value,
        email: event.target.elements.email.value,
        phone: event.target.elements.phone.value,
        password: event.target.elements.password.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <DoctorForm
        fetchDoctor={fetchDoctor}
        updateDoctor={updateDoctor}
        doctor={doctor}
      />
    </div>
  );
};

export default DoctorFormContainer;