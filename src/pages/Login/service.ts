import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8080/api/v1/' });

export const login = async (payload: LoginRequest) => {
  const { data: tokens } = await instance.post<TokenResponse>('auth/login', payload);
  return tokens;
};
