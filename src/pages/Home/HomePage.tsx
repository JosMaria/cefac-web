import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <section className={styles.textContainer}>
      <article className={styles.infoContainer}>
        <h2>Cefac - Centro de F&aacute;rmacos <span>Alimentos</span> y Cosm&eacute;ticos</h2>
        <p>
          El CEFAC, Centro de Fármacos, Alimentos y Cosméticos creada en el año 1992, es una Unidad
          de Investigación dependiente del Instituto de Investigaciones Bioquimicos-Farmaceuticas,
          de la Facultad de Bioquimica y Farmacias, cuyas actividades en el campo de los productos
          naturales, estan orientadas a valoración y validación de la actividad biologica de la
          flora medicinal utilizada por la medicina tradicional y popular.
        </p>
      </article>
      <article className={styles.infoContainer}>
        <h2>Investigaci&oacute;n</h2>
        <p>
          En la investigación el laboratorio abarca el desarrollo cientifico-tecnologico mediante
          el fortalecimiento de la investigacion y estandarizacion de procedimientos para extraer
          metabolicos secundarios, validar actividades farmacologicas de plantas de uso medicinal,
          asi como la fomulacion y elaboracion de fitomedicamentos y cosmeticos naturales
        </p>
      </article>

    </section>
  );
}