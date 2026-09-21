import axios from 'axios';

interface DoctorServiceProps {
  doctorObj: any;
}

interface DoctorServiceResponse {
  totalNumberOfDoctor: number;
  totalAppointment: number;
}

const DoctorService: React.FC<DoctorServiceProps> = ({ doctorObj }) => {
  const [totalNumberOfDoctor, setTotalNumberOfDoctor] = React.useState<DoctorServiceResponse | null>(null);
  const [totalAppointment, setTotalAppointment] = React.useState<DoctorServiceResponse | null>(null);

  React.useEffect(() => {
    axios.get('/api/doctors/count')
      .then(response => {
        setTotalNumberOfDoctor(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`/api/doctors/appointments/${doctorObj?.id}`)
      .then(response => {
        setTotalAppointment(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [doctorObj]);

  return { totalNumberOfDoctor, totalAppointment };
};

export default DoctorService;