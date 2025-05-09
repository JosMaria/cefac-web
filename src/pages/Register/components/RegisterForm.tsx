import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useMutation } from '@tanstack/react-query';

import { persistUser } from '../service';
import styles from './scss/RegiterForm.module.scss';

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

type Problem = 'REGISTERED_EMAIL';

type ErrorResponse = {
  path: string;
  reason: string;
  timestamp: Date;
  problem: Problem
};

type FormInput = RegisterPayload;

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const { mutate, isPending } = useMutation<TokenResponse, AxiosError<ErrorResponse>, FormInput>({
    mutationFn: persistUser,
    onSuccess: () => {
      reset();
      notifySuccess('Usuario registrado exitosamente.');
    },
    onError: (error, registerPayload) => {
      const errorResponse = error.response?.data;
      let msgError = 'hubo un error inesperado.';
      if (errorResponse) {
        const problemType = errorResponse.problem as Problem;
        if (problemType === 'REGISTERED_EMAIL') {
          msgError = `Este email ya fue registrado.\n${registerPayload.email}`;
        }
        notifyError(msgError);
      } else {
        notifyError(msgError);
      }
    }
  });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(formInput => mutate(formInput))}>
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
          <label htmlFor='email'>Email</label>
          <input {...register('email')} id='email' type='email' autoComplete='off' />
        </div>
        <div>
          <label htmlFor='phone'>N&uacute;mero</label>
          <input {...register('phone')} id='alias' type='number' autoComplete='off' />
        </div>
        <div>
          <label htmlFor='alias'>Alias</label>
          <input {...register('alias')} id='alias' type='text' autoComplete='off' />
        </div>
      </article>
      <button className={isPending ? styles.isPending : ''} disabled={isPending} type='submit'>
        {isPending ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  );
};
