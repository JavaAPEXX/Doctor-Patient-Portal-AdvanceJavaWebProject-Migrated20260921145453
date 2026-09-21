import { Doctor, Specialist } from '../models/doctor.model';

const API_BASE_URL = '/api';

export const doctorService = {
  getDoctorProfile: async (doctorId: number): Promise<Doctor> => {
    const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch doctor profile');
    }
    return response.json();
  },

  updateDoctorProfile: async (doctor: Doctor): Promise<Doctor> => {
    const response = await fetch(`${API_BASE_URL}/doctors/${doctor.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctor),
    });
    if (!response.ok) {
      throw new Error('Failed to update doctor profile');
    }
    return response.json();
  },

  changePassword: async (doctorId: number, oldPassword: string, newPassword: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    });
    if (!response.ok) {
      throw new Error('Failed to change password');
    }
  },

  getSpecialists: async (): Promise<Specialist[]> => {
    const response = await fetch(`${API_BASE_URL}/specialists`);
    if (!response.ok) {
      throw new Error('Failed to fetch specialists');
    }
    return response.json();
  },
};