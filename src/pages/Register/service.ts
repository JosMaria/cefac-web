import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8080/api/v1/' });

export const persistUser = async (payload: RegisterPayload) => {
  const { data: tokens } = await instance.post<TokenResponse>('auth/register', payload);
  return tokens;
};
