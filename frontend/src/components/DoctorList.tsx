import React, { useState, useEffect } from 'react';
import { Doctor } from '../types/doctor';
import { getDoctors, deleteDoctor } from '../services/doctorService';

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (err) {
        setError('Failed to load doctors. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await deleteDoctor(id);
        setDoctors(prevDoctors => prevDoctors.filter(doc => doc.id !== id));
        setSuccessMsg('Doctor deleted successfully.');
        setTimeout(() => setSuccessMsg(null), 3000);
      } catch (err) {
        setError('Failed to delete doctor. Please try again.');
      }
    }
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card my-card">
            <div className="card-body">
              <p className="fs-3 text-center text-danger">List of Doctors</p>

              {successMsg && (
                <p className="text-center text-success fs-3">{successMsg}</p>
              )}

              {error && (
                <p className="text-center text-danger fs-3">{error}</p>
              )}

              {loading ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <table className="table table-striped">
                  <thead>
                    <tr className="table-info">
                      <th scope="col">Full Name</th>
                      <th scope="col">DOB</th>
                      <th