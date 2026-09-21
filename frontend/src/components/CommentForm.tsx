import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CommentFormProps {
  id: number;
}

const CommentForm: React.FC<CommentFormProps> = ({ id }) => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [diseases, setDiseases] = useState('');
  const [comment, setComment] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const response = await axios.get(`/api/appointments/${id}`);
        const appointment = response.data;
        setFullName(appointment.fullName);
        setAge(appointment.age);
        setPhone(appointment.phone);
        setDiseases(appointment.diseases);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointmentData();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/comments', {
        id,
        fullName,
        age,
        phone,
        diseases,
        comment,
      });
      setSuccessMsg(response.data.message);
      setComment('');
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="form-control"
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="form-control"
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Diseases</label>
          <input
            type="text"
            name="diseases"
            value={diseases}
            onChange={(event) => setDiseases(event.target.value)}
            className="form-control"
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label className="form-label">Leave a Comment / Prescription</label>
          <textarea
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="form-control"
            rows="5"
            cols="20"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button type="submit" className="btn btn-success col-md-12">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;