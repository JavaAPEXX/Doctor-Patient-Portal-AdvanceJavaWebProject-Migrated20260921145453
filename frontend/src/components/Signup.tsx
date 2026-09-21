import React, { useState, FormEvent } from 'react';
import { registerUser, RegisterRequest } from '../services/auth.service';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const data: RegisterRequest = {
      fullName,
      email,
      password,
    };

    try {
      const result = await registerUser(data);
      if (result.success) {
        setSuccessMsg(result.message);
        // Optionally reset form or redirect
      } else {
        setErrorMsg(result.message);
      }
    } catch (error) {
      setErrorMsg('An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card my-card">
            <div className="card-header text-center text-white my-bg-color">
              <p className="fs-4 text-center text-white mt-2">
                <i className="fa fa-user-plus"></i> User Register
              </p>
            </div>
            <div className="card-body">
              {successMsg && (
                <p className="text-center text-success fs-3">{successMsg}</p>
              )}

              {errorMsg && (
                <p className="text-center text-danger fs-3">{errorMsg}</p>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Enter full