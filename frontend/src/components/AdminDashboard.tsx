import React, { useState, useEffect } from 'react';
import { AdminService, DashboardStats } from '../services/admin.service';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [specialistName, setSpecialistName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    // Check if admin is logged in (simulating session check)
    // In a real app, this would be handled by an auth guard or middleware
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth/check', {
          method: 'GET',
          credentials: 'include'
        });
        
        if (!response.ok) {
          window.location.href = '/admin-login';
          return;
        }
        
        await loadStats();
      } catch (err) {
        window.location.href = '/admin-login';
      }
    };

    checkAuth();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const data = await AdminService.getDashboardStats();
      setStats(data);
      setError(null);
    } catch (err) {
      setError('Failed to load dashboard statistics.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddSpecialist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!specialistName.trim()) return;

    try {
      setIsSubmitting(true);
      await AdminService.addSpecialist(specialistName);
      setSuccessMsg('Specialist added successfully.');
      setSpecialistName('');
      setIsModalOpen(false);
      
      // Reload stats to update the count
      await loadStats();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err) {
      setError('Failed to add specialist.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal