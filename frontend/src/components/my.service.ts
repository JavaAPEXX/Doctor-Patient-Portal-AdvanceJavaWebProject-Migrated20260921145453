import axios from 'axios';

interface User {
  id: number;
  fullName: string;
  // add other user properties
}

interface AppointmentData {
  userId: number;
  fullName: string;
  gender: string;
  age: number;
  appointmentDate: string;
  email: string;
  phone: string;
  diseases: string;
}

interface Doctor {
  id: number;
  fullName: string;
  specialist: string;
}

const myService = axios.create({
  baseURL: 'http://localhost:8080',
});

const fetchUser = async () => {
  try {
    const response = await myService.get('/user');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createAppointment = async (data: AppointmentData) => {
  try {
    const response = await myService.post('/addAppointment', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getDoctorList = async () => {
  try {
    const response = await myService.get('/doctors');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchUser, createAppointment, getDoctorList };