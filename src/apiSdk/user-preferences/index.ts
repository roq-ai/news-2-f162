import axios from 'axios';
import queryString from 'query-string';
import { UserPreferenceInterface, UserPreferenceGetQueryInterface } from 'interfaces/user-preference';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserPreferences = async (
  query?: UserPreferenceGetQueryInterface,
): Promise<PaginatedInterface<UserPreferenceInterface>> => {
  const response = await axios.get('/api/user-preferences', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserPreference = async (userPreference: UserPreferenceInterface) => {
  const response = await axios.post('/api/user-preferences', userPreference);
  return response.data;
};

export const updateUserPreferenceById = async (id: string, userPreference: UserPreferenceInterface) => {
  const response = await axios.put(`/api/user-preferences/${id}`, userPreference);
  return response.data;
};

export const getUserPreferenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-preferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserPreferenceById = async (id: string) => {
  const response = await axios.delete(`/api/user-preferences/${id}`);
  return response.data;
};
