import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

import { login } from '@cefac/services';
import { useMutation } from '@tanstack/react-query';

export function useAuthentication() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<TokenResponse, AxiosError<{}>, FormType>({
    mutationFn: login,
    onSuccess: () => {
      navigate('/me')
      console.log('Bienvenido.');
    },
    onError: (e) => {
      console.log('Datos incorrectos.', e);
    }
  });

  return { mutate, isPending };
}