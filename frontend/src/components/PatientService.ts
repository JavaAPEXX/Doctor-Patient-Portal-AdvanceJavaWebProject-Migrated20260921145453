import axios from 'axios';

interface Patient {
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

const PatientService: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const getAllPatients = async () => {
    try {
      const response = await axios.get('/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSuccess = (msg: string) => {
    setSuccessMsg(msg);
  };

  const handleError = (msg: string) => {
    setErrorMsg(msg);
  };

  return (
    <div>
      <h2>Patient Details</h2>
      {successMsg && <p className="text-success">{successMsg}</p>}
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <button onClick={getAllPatients}>Get Patients</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Appointment Date</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Diseases</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.fullName}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.appointmentDate}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
              <td>{patient.diseases}</td>
              <td>{patient.status}</td>
              <td>
                {patient.status === 'Pending' ? (
                  <a href="#!" className="btn btn-success btn-sm">
                    Comment / Prescription
                  </a>
                ) : (
                  <a href="#!" className="btn btn-success btn-sm disabled">
                    <i className="fa fa-comment"></i> Comment / Prescription
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientService;