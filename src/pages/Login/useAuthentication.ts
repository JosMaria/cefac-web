import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

import { login } from '@cefac/services';
import { useMutation } from '@tanstack/react-query';

type MyType = {
  type: string;
  other: number;
}

export function useAuthentication() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<TokenResponse, AxiosError<MyType>, FormType>({
    mutationFn: login,
    onSuccess: () => {
      navigate('/me')
      console.log('Bienvenido.');
    },
    onError: (e) => {
      const a = e.response?.data;
      console.log('Datos incorrectos.', e);
    }
  });

  return { mutate, isPending };
}