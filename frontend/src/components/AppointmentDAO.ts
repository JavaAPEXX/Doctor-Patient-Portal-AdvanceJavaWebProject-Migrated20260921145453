import axios from 'axios';

interface Appointment {
  id: number;
  fullName: string;
  gender: string;
  age: number;
  appointmentDate: string;
  email: string;
  phone: string;
  diseases: string;
  status: string;
}

const AppointmentDAO = axios.create({
  baseURL: 'http://localhost:8080/api',
});

const getAllAppointmentByLoginDoctor = async (doctorId: number) => {
  try {
    const response = await AppointmentDAO.get(`/appointments?doctorId=${doctorId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default AppointmentDAO;