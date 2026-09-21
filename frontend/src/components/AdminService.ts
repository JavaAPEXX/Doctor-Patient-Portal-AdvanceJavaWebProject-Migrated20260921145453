import axios from 'axios';

interface Props {
  // Add any props you need here
}

const AdminService: React.FC<Props> = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchAdminLogin = async () => {
      try {
        const response = await axios.post('/adminLogin', {
          email: 'admin@gmail.com',
          password: 'admin',
        });
        setIsAdminLoggedIn(true);
      } catch (error) {
        setError('Invalid Username or Password.');
      }
    };
    fetchAdminLogin();
  }, []);

  return (
    <div>
      {isAdminLoggedIn ? (
        <p>Admin logged in!</p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default AdminService;