import { User } from '../models/user.model';

const API_BASE_URL = '/api';

export const AuthService = {
  getCurrentUser(): Promise<User | null> {
    return fetch(`${API_BASE_URL}/auth/current-user`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return null;
        }
        return response.json();
      })
      .catch(() => null);
  },

  logout(): Promise<void> {
    return fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Logout failed');
        }
      });
  },
};