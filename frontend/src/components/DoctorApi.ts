import axios from 'axios';

const DoctorApi = {
  async getCount(): Promise<number> {
    const response = await axios.get('/api/doctors/count');
    return response.data;
  },

  async getAppointmentByDoctorId(doctorId: number): Promise<number> {
    const response = await axios.get(`/api/doctors/appointments/${doctorId}`);
    return response.data;
  },
};

export default DoctorApi;