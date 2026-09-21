import React, { useState } from 'react';

interface Doctor {
  id: number;
  fullName: string;
  dateOfBirth: string;
  qualification: string;
  specialist: string;
  email: string;
  phone: string;
  password: string;
}

const DoctorForm: React.FC = () => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  const fetchDoctor = async (id: number) => {
    const response = await fetch('/api/doctors/' + id, {
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
    const id = parseInt(event.target.elements.id.value);
    const fullName = event.target.elements.fullName.value;
    const dateOfBirth = event.target.elements.dateOfBirth.value;
    const qualification = event.target.elements.qualification.value;
    const specialist = event.target.elements.specialist.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const password = event.target.elements.password.value;

    const response = await fetch('/api/doctors/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        dateOfBirth,
        qualification,
        specialist,
        email,
        phone,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={updateDoctor}>
      <input type="hidden" name="id" value={doctor?.id} />
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          name="fullName"
          type="text"
          placeholder="Enter full name"
          value={doctor?.fullName}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          name="dateOfBirth"
          type="date"
          placeholder="Enter DOB"
          value={doctor?.dateOfBirth}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Qualification</label>
        <input
          name="qualification"
          type="text"
          placeholder="Enter qualification"
          value={doctor?.qualification}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Specialist</label>
        <select
          className="form-control"
          name="specialist"
          value={doctor?.specialist}
        >
          <option value="">Select Specialist</option>
          {/* Add options here */}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={doctor?.email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          name="phone"
          type="text"
          placeholder="Enter mobile number"
          value={doctor?.phone}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          value={doctor?.password}
        />
      </div>
      <button type="submit" className="btn btn-danger text-white col-md-12">
        Update
      </button>
    </form>
  );
};

export default DoctorForm;