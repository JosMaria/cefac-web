import styles from './Login.module.scss';
import {SubmitHandler, useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type InputsType = {
    username: string;
    password: string;
};

export const Login = () => {
    const {register, handleSubmit, control, formState: {errors}} = useForm<InputsType>();

    const submit: SubmitHandler<InputsType> = data => console.log(data);

    return (
        <dialog className={styles.dialogContent} open={true}>
            <div className={styles.position}>
                <section className={styles.modalSection}>
                    <h1>Inicio de Sesión</h1>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className={styles.inputContainer}>
                            <label htmlFor='username'>Usuario</label>
                            <input {...register('username', {required: true})} autoComplete='off' />
                            {errors.username && <ErrorFieldMessage message='Este campo es obligatorio'/>}
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor='username'>Contrase&#241;a</label>
                            <input {...register('password', {required: true})} type='password'/>
                            {errors.password && <ErrorFieldMessage message='Este campo es obligatorio'/>}
                        </div>
                        <button className={styles.button} type='submit'>Iniciar Sesión</button>
                    </form>
                    <DevTool control={control}/>
                </section>
            </div>
        </dialog>
    );
}

type ErrorFieldMessageProps = {
    message: string;
}

const ErrorFieldMessage = ({message}: ErrorFieldMessageProps) => {
    return (
        <span className={styles.errorMessage}>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none'>
                <path stroke='#D32F2F' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                      d='M12 8V12M12 16H12.01M10.29 3.86L1.82 18C1.64538 18.3024 1.55299 18.6453 1.552 18.9945C1.55102 19.3437 1.64148 19.6871 1.81445 19.9905C1.98743 20.2939 2.23675 20.5467 2.53773 20.7238C2.83871 20.9009 3.18082 20.9961 3.53 21H20.47C20.8192 20.9961 21.1613 20.9009 21.4623 20.7238C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5318 3.5661 13.2807 3.32311 12.9812 3.15447C12.6817 2.98584 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98584 11.0188 3.15447C10.7193 3.32311 10.4682 3.5661 10.29 3.86Z'
                />
                <path d='M12 16H12.01' stroke='#D32F2F' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
            {message}
        </span>
    );
}
