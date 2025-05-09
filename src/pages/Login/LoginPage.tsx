import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';

import logoUrl from '../../assets/logo.svg';
import styles from './LoginPage.module.scss';
import { login } from './service';

export const LoginPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <img className={styles.logo} src={logoUrl} alt='Logo' />
          <h1 className={styles.title}>Inicio de Sesión</h1>
        </header>
        <Form />
      </div>
    </section>
  );
}

const notifySuccess = (message: string) => toast.success(message, {
  style: {
    backgroundColor: 'ivory',
    borderRadius: '0',
    borderBottomColor: 'green',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.3rem',
    fontSize: '0.9rem',
    marginRight: 0,
  }
});

const notifyError = (message: string) => toast.error(message, {
  style: {
    backgroundColor: 'lightpink',
    borderRadius: '0',
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.3rem',
    fontSize: '0.9rem',
    marginRight: 0,
  }
});

type FormType = LoginRequest;

type ErrorResponse = {
  path: string;
  reason: string;
  timestamp: Date;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<TokenResponse, AxiosError<ErrorResponse>, FormType>({
    mutationFn: login,
    onSuccess: () => {
      navigate('/me')
      notifySuccess('Bienvenido.');
    },
    onError: () => {
      notifyError('Datos incorrectos.');
    }
  });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(form => mutate(form))}>
      <div className={styles.inputContainer}>
        <label htmlFor='username'>Usuario</label>
        <input {...register('username')} id='username' type='text' autoComplete='off' />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='password'>Contrase&#241;a</label>
        <input {...register('password')} id='password' type='password' />
      </div>
      <button className={`${styles.submit} ${isPending ? styles.pending : ''}`} type='submit'>
        {isPending ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}
