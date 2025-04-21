import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import styles from './RegisterPage.module.scss';
import { Information } from '../../components/msg/Information';
import { Warning } from '../../components/msg/Warning';

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
        <Information msg='hola' />
        <Warning msg='' />
        
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
        </form>
      </section>
    </div>
  );
}