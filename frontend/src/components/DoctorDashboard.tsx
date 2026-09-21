import React from 'react';
import axios from 'axios';

interface DoctorDashboardProps {
  doctorObj: any;
}

const DoctorDashboard: React.FC<DoctorDashboardProps> = ({ doctorObj }) => {
  const [totalNumberOfDoctor, setTotalNumberOfDoctor] = React.useState(0);
  const [totalAppointment, setTotalAppointment] = React.useState(0);

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

  return (
    <div className="container p-5">
      <p className="text-center text-success fs-3">Doctor DashBoard</p>

      <div className="row">
        <div className="col-md-4 offset-md-2">
          <div className="card my-card">
            <div className="card-body text-center text-success">
              <i className="fa-solid fa-user-doctor fa-3x"></i><br>
              <p className="fs-4 text-center">
                Doctor <br>
                {totalNumberOfDoctor}
              </p>
            </div>
          </div>

        </div>

        <div className="col-md-4">
          <div className="card my-card">
            <div className="card-body text-center text-success">
              <i className="fa-solid fa-calendar-check fa-3x"></i><br>
              <p className="fs-4 text-center">
                Total Appointment <br>
                {totalAppointment}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;