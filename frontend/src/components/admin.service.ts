import axios from 'axios';

interface AdminServiceProps {
  // no props needed
}

const AdminService: React.FC<AdminServiceProps> = () => {
  const [error, setError] = React.useState('');

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/adminLogin', {
        email,
        password,
      });
      // redirect to admin index
      window.location.href = '/admin/index';
    } catch (error) {
      setError('Invalid Username or Password.');
    }
  };

  return (
    <div>
      <button onClick={() => login('admin@gmail.com', 'admin')}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AdminService;