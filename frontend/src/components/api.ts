import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/adminLogin', {
      email,
      password,
    });
    // redirect to admin index
    window.location.href = '/admin/index';
  } catch (error) {
    throw error;
  }
};

export { login };