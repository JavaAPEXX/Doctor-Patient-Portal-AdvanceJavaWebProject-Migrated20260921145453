import React, { useState, FormEvent } from 'react';
import { authService, LoginRequest } from '../services/auth.service';

const UserLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    const credentials: LoginRequest = { email, password };

    try {
      const result = await authService.login(credentials);
      if (result.success) {
        setSuccessMsg('Login successful! Redirecting...');
        // In a real app, you would handle the redirect here based on the response
        // e.g., window.location.href = '/dashboard';
      } else {
        setErrorMsg(result.message || 'Invalid Username or Password.');
      }
    } catch (error) {
      setErrorMsg('An error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="