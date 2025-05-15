import { JSX } from 'react';

import styles from '../scss/Notes.module.scss';

type NoteProps = {
  title: string;
  children: JSX.Element;
};

const Note: React.FC<NoteProps> = ({ children, title }) => (
  <article className={styles.note}>
    <div className={styles.subtitleContainer}>
      <div className={styles.line} />
      <h3>{title}</h3>
      <div className={styles.line} />
    </div>
    {children}
  </article>
);

export const Notes = () => (
  <section className={styles.container}>
    <Note title='MISIÓN'>
      <p>
        Elaborar, planificar y ejecutar proyectos de investigaci&oacute;n cientifica y desarrollo
        tecnol&oacute;gico, en el campo de productos naturales, para su posterior aplicaci&oacute;n
        en la medicina tradicional o la industria farmaceutica precautelando el equilibrio ecologico
        y la conservaci&oacute;n de la biodiversidad.
      </p>
    </Note>
    <Note title='INVESTIGACIÓN'>
      <p>
        Validaci&oacute;n de actitividad farmacologica de plantas de uso medicinal y desarrollo de
        tecnolog&iacute;as de productos naturales transferibles a la industria fitofarmaceuticos
        y cosmetolog&iacute;a natural
      </p>
    </Note>
  </section>
);

