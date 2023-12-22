import { useQuery } from 'react-query';
import api from '../api/users';
import { Users } from './types';

async function fetchUsers() {
  const { data } = await api.get<Users[]>('/elements');
  return data;
}

export function useFetchUsers() {
  return useQuery(['Users-Lits'], fetchUsers);
}
