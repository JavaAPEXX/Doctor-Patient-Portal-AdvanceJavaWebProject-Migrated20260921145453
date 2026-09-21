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

const AppointmentService = axios.create({
  baseURL: 'http://localhost:8080/api',
});

const createAppointment = async (appointment: Appointment) => {
  try {
    const response = await AppointmentService.post('/appointments', appointment);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default AppointmentService;