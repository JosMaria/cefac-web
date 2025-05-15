import styles from '../scss/Presentation.module.scss';

export const Presentation = () => {
  return (
    <>
      <h1 className={styles.title}>Cefac - Centro de <span>F&aacute;rmacos Alimentos</span> y <span>Cosm&eacute;ticos</span></h1>
      <div className={styles.presentationText}>
        <p>
          El CEFAC, Centro de Fármacos, Alimentos y Cosméticos creada en el año 1992, es una Unidad
          de Investigación dependiente del Instituto de Investigaciones Bioquimicos-Farmaceuticas,
          de la Facultad de Bioquimica y Farmacias, cuyas actividades en el campo de los productos
          naturales, estan orientadas a valoración y validación de la actividad biologica de la
          flora medicinal utilizada por la medicina tradicional y popular.
        </p>
        <br />
        <h2>Objetivo</h2>
        <p>
          Contribuir en el desarrollo científico-tecnológico mediante el fortalecimiento
          de la investigación y estandarización de procedimientos para extraer metabolitos secundarios y validar
          actividades farmacológicas de especies vegetales reportadas como medicinales, así como la formulación
          y elaboración de fitofármacos y cosméticos naturales.
        </p>
        <br />
        <h2>Interacción Social</h2>
        <p>
          el laboratorio genera y asegura el relacionamiento con sectores que trabajan en el área de productos naturales, mediante su equipamiento y el personal capacitado dentro las áreas de su competencia. También, dentro de las labores del Centro, realizan actividades como cursos de asesoramiento en el manejo y procesamiento de materia prima, talleres, ferias y seminarios con el objetivo de formar al estudiante.
        </p>
      </div>

      <article className={styles.box}>
        <div className={styles.subtitleContainer}>
          <div className={styles.line} />
          <h3>MISI&Oacute;N</h3>
          <div className={styles.line} />
        </div>
        <p>
          Elaborar, planificar y ejecutar proyectos de investigacion cientifica y desarrollo
          tecnologico, en el campo de productos naturales, para su posterior aplicacion en la
          medicina tradicional o la industria farmaceutica precautelando el equilibrio ecologico
          y la conservacion de la biodiversidad
        </p>
      </article>
      <article className={styles.box}>
        <div className={styles.subtitleContainer}>
          <div className={styles.line} />
          <h3>INVESTIGACI&Oacute;N</h3>
          <div className={styles.line} />
        </div>
        <p>
          Validación de actitividad farmacologica de plantas de uso medicinal y desarrollo de
          tecnologias de productos naturales transferibles a la industria fitofamrmaceuticos
          y cosmetología natural
        </p>
      </article>
    </>
  );
}