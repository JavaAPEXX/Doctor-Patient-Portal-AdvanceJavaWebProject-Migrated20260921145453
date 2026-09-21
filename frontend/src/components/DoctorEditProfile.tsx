import React, { useState, useEffect } from 'react';
import { doctorService } from '../services/doctor.service';
import { Doctor, Specialist } from '../models/doctor.model';

interface DoctorEditProfileProps {
  doctorId: number;
  onProfileUpdate?: (updatedDoctor: Doctor) => void;
}

const DoctorEditProfile: React.FC<DoctorEditProfileProps> = ({ doctorId, onProfileUpdate }) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Password form state
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [passwordLoading, setPasswordLoading] = useState<boolean>(false);
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState<string | null>(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string | null>(null);

  // Profile form state
  const [fullName,