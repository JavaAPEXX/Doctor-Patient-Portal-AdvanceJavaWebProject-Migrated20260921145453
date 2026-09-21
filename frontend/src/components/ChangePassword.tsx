import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

const ChangePassword: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    AuthService.changePassword(user.id, oldPassword, newPassword)
      .then(result => {
        if (result.success) {
          setSuccessMsg(result.message);
          setNewPassword('');
          setOldPassword('');
        } else {
          setErrorMsg(result.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card my-card">