import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { persistUser } from '../service';
import styles from './scss/RegiterForm.module.scss';

type FormInput = RegisterPayload;

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const registerMutation = useMutation<TokenResponse, Error, FormInput>({
    mutationFn: persistUser,
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log(error)
  });

  return (
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
  );
};
