import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { InfoMessage } from './components/InfoMessage';
import styles from './RegisterPage.module.scss';

type FormInput = {
  name: string;
  lastname: string;
  phone: number;
  alias: string;
  username: string;
  email: string;
};

type UserType = {
  name: string;
  lastname: string;
  phone: number;
  alias: string;
  username: string;
  email: string;
};

type TokenResponse = {
  access_token: string;
  refresh_token: string;
};

const instance = axios.create({ baseURL: 'http://localhost:8080/api/v1/' });

const persistUser = async (user: UserType) => {
  const { data: tokens } = await instance.post<TokenResponse>('auth/register', user);
  return tokens;
};

export const RegisterPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { register, handleSubmit } = useForm<FormInput>();

  const registerMutation = useMutation<TokenResponse, Error, FormInput>({
    mutationFn: persistUser,
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log(error)
  });

  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionContainer}>
        <header className={styles.headerContainer}>
          <div style={{ width: '25px', height: '25px' }}></div>
          <h1>Registro de Usuario</h1>
          <svg className={`${showInfo ? styles.invisible : ''} `} onClick={() => setShowInfo(true)}
            width='25' height='25' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='10' fill='#1E88E5' />
            <path d='M12 16V12' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <circle cx='12' cy='8' r='1' fill='white' />
          </svg>
        </header>
        {showInfo && <InfoMessage close={() => setShowInfo(false)} />}
        <form className={styles.formContainer} onSubmit={handleSubmit(formInput => registerMutation.mutate(formInput))}>
          <article className={styles.inputContainer}>
            <div>
              <label htmlFor='name'>Nombre</label>
              <input {...register('name')} id='name' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='lastname'>Apellido</label>
              <input {...register('lastname')} id='lastname' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='phone'>N&uacute;mero</label>
              <input {...register('phone')} id='alias' type='number' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='alias'>Alias</label>
              <input {...register('alias')} id='alias' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='username'>Nombre de Usuario</label>
              <input {...register('username')} id='username' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input {...register('email')} id='email' type='text' autoComplete='off' />
            </div>
          </article>
          <button>Registrar</button>
        </form>
      </section>
    </div>
  );
};
