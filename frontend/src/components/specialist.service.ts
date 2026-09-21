import { Specialist } from '../models/specialist.model';

const API_BASE_URL = '/api';

export const getSpecialists = async (): Promise<Specialist[]> => {
  const response = await fetch(`${API_BASE_URL}/specialists`);
  if (!response.ok) {
    throw new Error('Failed to fetch specialists');
  }
  return response.json();
};