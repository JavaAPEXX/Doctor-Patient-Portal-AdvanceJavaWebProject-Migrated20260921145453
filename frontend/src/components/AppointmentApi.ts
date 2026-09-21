import axios from 'axios';

interface AppointmentData {
  id: number;
  fullName: string;
  age: string;
  phone: string;
  diseases: string;
}

interface AppointmentResponse {
  data: AppointmentData;
}

const AppointmentApi = {
  async getAppointmentById(id: number): Promise<AppointmentResponse> {
    try {
      const response = await axios.get(`/api/appointments/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default AppointmentApi;