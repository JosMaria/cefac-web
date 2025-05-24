import { axiosInstance } from '@cefac/config'

export const login = async (payload: LoginRequest) => {
  const { data: tokens } = await axiosInstance.post<TokenResponse>('auth/login', payload);
  return tokens;
};
