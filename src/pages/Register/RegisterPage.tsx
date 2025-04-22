import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import styles from './RegisterPage.module.scss';
import { useState } from 'react';

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
  const { register, handleSubmit } = useForm<FormInput>();

  const registerMutation = useMutation<TokenResponse, Error, FormInput>({
    mutationFn: persistUser,
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log(error)
  });

  return (
    <div className={styles.container}>
      <section className={styles.content}>

        <h1>Registro de Usuario</h1>
        <section className={styles.msgSection}>
          <MessageSection />
          <div className={styles.msgContainer}>
            Este tutorial fue diseñado para personas que prefieren aprender haciendo y quieren ver algo tangible de manera rápida. Si prefieres aprender cada concepto paso a paso, comienza con Describir la UI.
          </div>
        </section>


        {/* 
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(formInput => registerMutation.mutate(formInput))}
        >
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
        </form> */}
      </section>
    </div>
  );
}

type MessageType = 'information' | 'warning' | 'danger' | 'none';

const MessageSection = () => {
  const [value, setValue] = useState<MessageType>('none');

  const changeValue = (newValue: MessageType) => setValue(prev => prev !== newValue ? newValue : 'none');

  return (
    <div className={styles.iconContainer}>
      <svg
        className={`${styles.icon} ${styles.information} ${value === 'information' ? styles.selected : ''} `}
        onClick={() => changeValue('information')}
        width='35' height='35' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='12' cy='12' r='10' fill='#1E88E5' />
        <path d='M12 16V12' stroke='white' strokeWidth='2' strokeLinecap='round' />
        <circle cx='12' cy='8' r='1' fill='white' />
      </svg>
      <svg
        className={`${styles.icon} ${styles.warning} ${value === 'warning' ? styles.selected : ''}`}
        onClick={() => changeValue('warning')}
        width='35' height='35' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.308 4L2.492 18C2.221 18.482 2.387 19.091 2.869 19.362C3.016 19.441 3.182 19.483 3.351 19.483H20.649C21.202 19.483 21.649 19.036 21.649 18.483C21.649 18.314 21.607 18.148 21.528 18.001L13.692 4C13.421 3.518 12.812 3.352 12.33 3.623C12.117 3.742 11.942 3.917 11.823 4.13L10.308 4Z'
          fill='#FFC107' />
        <path d='M12 16V12' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' />
        <circle cx='12' cy='9' r='1' fill='#000000' />
      </svg>
      <svg
        className={`${styles.icon} ${styles.danger} ${value === 'danger' ? styles.selected : ''}`}
        onClick={() => changeValue('danger')}
        width='35' height='35' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='5.757' y='5.757' width='12.485' height='12.485' rx='1' transform='rotate(45 12 12)' fill='#FF3B30' stroke='#D70015' stroke-width='1.5' />
        <path d='M12 8V12' stroke='white' stroke-width='2' stroke-linecap='round' />
        <circle cx='12' cy='15' r='1' fill='white' />
      </svg>
    </div>
  );
}

const Warning = () => {
  return (
    <article className={styles.msgContainer}>
      <header className={styles.header}>
        <div className={styles.title}>
          <svg width='28' height='28' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fill='#FFC107' d='M10.308 4L2.492 18C2.221 18.482 2.387 19.091 2.869 19.362C3.016 19.441 3.182 19.483 3.351 19.483H20.649C21.202 19.483 21.649 19.036 21.649 18.483C21.649 18.314 21.607 18.148 21.528 18.001L13.692 4C13.421 3.518 12.812 3.352 12.33 3.623C12.117 3.742 11.942 3.917 11.823 4.13L10.308 4Z' />
            <path d='M12 16V12' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' />
            <circle cx='12' cy='9' r='1' fill='#000000' />
          </svg>
          <h3>Consideraciones</h3>
        </div>
        <svg width='25' height='25' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M18 6L6 18' stroke='#808080' strokeWidth='2' strokeLinecap='round' />
          <path d='M6 6L18 18' stroke='#808080' strokeWidth='2' strokeLinecap='round' />
        </svg>
      </header>
      <ul>
        <li>El nombre de usuario y el correo electronico no deber&iacute;an haber sido registrados anteriormente.</li>
        <li>El alias tambien podria considerarse como rol que tiene el usuario dentro del sistema, por preferencia una palabra que lo defina claramente.</li>
        <li>El n&uacute;mero de celular se tomara en cuenta como la contraseña al momento del registro.</li>
      </ul>
    </article>
  )
}