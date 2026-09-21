import axios from 'axios';

interface User {
  email: string;
  password: string;
}

const AdminLoginService: React.FC = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/adminLogin', {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      setSuccessMsg(response.data);
    } catch (error) {
      console.error(error);
      setErrorMsg('Invalid Username or Password');
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>
      {successMsg && <p className="text-success">{successMsg}</p>}
      {errorMsg && <p className="text-danger">{errorMsg}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginService;