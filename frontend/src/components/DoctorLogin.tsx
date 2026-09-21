import React, { useState } from 'react';
import axios from 'axios';

interface User {
  email: string;
  password: string;
}

const DoctorLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/adminLogin', {
        email,
        password,
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
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;