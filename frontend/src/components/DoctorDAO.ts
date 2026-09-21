import axios from 'axios';

interface DoctorDAOProps {
  // props for doctor dao
}

interface DoctorDAOResponse {
  // response from doctor dao
}

const DoctorDAO: React.FC<DoctorDAOProps> = () => {
  const [totalNumberOfDoctor, setTotalNumberOfDoctor] = React.useState<DoctorDAOResponse | null>(null);
  const [totalAppointment, setTotalAppointment] = React.useState<DoctorDAOResponse | null>(null);

  React.useEffect(() => {
    axios.get('/api/doctors/count')
      .then(response => {
        setTotalNumberOfDoctor(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('/api/doctors/appointments')
      .then(response => {
        setTotalAppointment(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return { totalNumberOfDoctor, totalAppointment };
};

export default DoctorDAO;