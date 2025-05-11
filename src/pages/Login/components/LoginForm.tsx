import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';

import { login } from '../service';
import styles from '../scss/LoginForm.module.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormType>();

  const { mutate, isPending } = useMutation<TokenResponse, AxiosError<{}>, FormType>({
    mutationFn: login,
    onSuccess: () => {
      navigate('/me')
      console.log('Bienvenido.');
    },
    onError: () => {
      console.log('Datos incorrectos.');
    }

  });
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit(form => mutate(form))}>
        <div className={styles.inputContainer}>
          <label htmlFor='username'>Usuario</label>
          <input {...register('username')} id='username' type='text' autoComplete='off' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='password'>Contrase&#241;a</label>
          <input {...register('password')} id='password' type='password' />
        </div>
        <button className={styles.buttonGreen} type='submit'>
          {isPending ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>

  );
}